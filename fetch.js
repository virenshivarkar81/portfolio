const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

// Error messages
const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct."
};

// ===================== GITHUB FETCH =====================
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const postData = JSON.stringify({
    query: `
    {
      user(login: "${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, res => {
    let responseData = "";

    console.log(`statusCode: ${res.statusCode}`);

    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", chunk => {
      responseData += chunk;
    });

    res.on("end", () => {
      fs.writeFile("./public/profile.json", responseData, err => {
        if (err) return console.log(err);
        console.log("✅ saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.error("❌ Error:", error);
  });

  req.write(postData);
  req.end();
}

// ===================== MEDIUM DISABLED =====================
// Medium API is unstable → removed completely