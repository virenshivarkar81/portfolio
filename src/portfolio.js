/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Virendra Shivarkar",
  title: "Hi all, I'm Virendra",
  subTitle: emoji(
    "Lead QA Engineer | SDET | PLM Functional Consultant Expert 🚀 with 7+ years of experience in 3DEXPERIENCE, ENOVIA, Automation Testing, API Testing, and CI/CD. Passionate about building scalable QA solutions and AI-driven testing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IrgP2Gk00HUPE8FagAixvzrKw_9VM8Cu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/virenshivarkar81",
  linkedin: "https://www.linkedin.com/in/virendra-shivarkar-881945110/",
  gmail: "virenshivarkar301@gmail.com",
 // gitlab: "https://github.com/virenshivarkar81",
 // facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "QA Lead | SDET | PLM Functional Consultant Expert",
  skills: [
    "⚡ End-to-end quality for PLM and Telecom applications",
    "⚡ PLM transformation: migration, upgrade, implementation (3DEXPERIENCE)",
    "⚡ PLM Functional Expert (ENOVIA: Change, Issue, Release workflows)",
    "⚡ Functional, Regression, Integration, System & UAT testing",
    "⚡ Test strategy, test design, and defect lifecycle management",
    "⚡ Automation using Selenium, Playwright, TestNG, Cucumber",
    "⚡ API testing (Postman, SOAP UI) with SQL validation",
    "⚡ CI/CD with Jenkins in Agile environments",
    "⚡ Backend validation using SQL and data integrity checks",
    "⚡ PLM tools: ENOVIA, CATIA, DELMIA",
    "⚡ Cross-team collaboration with architects and stakeholders",
    "⚡ QA leadership, mentoring, and release readiness",
    "⚡ Agile methodology (Scrum), SDLC and STLC practices",
    "⚡ AI-driven QA: prompt engineering, evaluation, hallucination detection"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const technicalSkills = {
  title: "Technical Skills",
  skills: [
    {
      category: "🧪 Testing",
      items: "Manual, Functional, Regression, Smoke, Sanity, System, Integration, UAT"
    },
    {
      category: "⚙️ Automation",
      items: "Selenium WebDriver, Playwright, TestNG, Cucumber (BDD), Automation Framework Design"
    },
    {
      category: "🔗 API Testing",
      items: "REST API Testing, Postman, SOAP UI"
    },
    {
      category: "🚀 CI/CD & DevOps",
      items: "Jenkins, Continuous Integration, Continuous Testing, Git, Bitbucket"
    },
    {
      category: "☁️ Cloud & Tools",
      items: "AWS (EC2, S3 – Basic), Docker (Basic), Linux/UNIX, 3DEXPERIENCE SaaS"
    },
    {
      category: "🗄️ Databases",
      items: "SQL, MySQL, MQL (Matrix Query Language)"
    },
    {
      category: "🐞 Defect Management",
      items: "Jira, HP ALM, TestRail, Bugzilla"
    },
    {
      category: "📊 Methodologies",
      items: "Agile (Scrum), STLC, SDLC"
    },
    {
      category: "💻 Programming",
      items: "Core Java, SQL, Python"
    },
    {
      category: "🌐 Domains",
      items: "PLM, Telecom (CSM, CRM, Billing, Collection)"
    },
    {
      category: "🏭 PLM Tools",
      items: "ENOVIA, CATIA V5/V6, DELMIA, 3DEXPERIENCE, SOLIDWORKS, NX"
    },
    {
      category: "📌 PLM Functional",
      items: "Change Management, BOM, Requirement Mgmt, Variant Config, Release Mgmt, Workflow Validation"
    },
    {
      category: "🔄 PLM Programs",
      items: "Implementation, Customization, Migration, Upgrade, Data Validation, User Adoption"
    },
    {
      category: "🤖 GenAI",
      items: "Prompt Engineering, AI Testing, Response Evaluation, AURA, LEO AI Tools"
    }
  ],
  display: true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quality Engineering Specialist",
      company: "Dassault Systèmes Global Services",
	  companylogo: require("./assets/images/DS1.png"),
      date: "Aug 2021 – Present",
      desc:
        "Leading QA validation and end-to-end delivery for PLM migration, upgrade, and implementation projects on 3DEXPERIENCE platform.",
      descBullets: [
        "Acted as PLM Functional Consultant for ENOVIA workflows",
        "Delivered projects for Mahindra, L&T Defense, Toyota, Boeing, Honda",
        "Performed functional, regression, integration, and system testing",
        "Implemented automation using Selenium, Playwright, and 3DXTAF",
        "Performed API testing (Postman, SOAP UI) and SQL validation",
        "Led Agile testing with CI/CD pipelines (Jenkins)",
        "Managed defect lifecycle and Service Requests with R&D teams",
        "Provided Hypercare support and ensured smooth production rollout",
        "Worked on ENOVIA V6, CATIA V6, DELMIA process planning"
      ]
    },
    {
      role: "Associate Consultant / Functional Test Engineer",
      company: "Datamatics (Client: Amdocs)",
	  companylogo: require("./assets/images/amdocs.png"),
      date: "Nov 2020 – Aug 2021",
      desc:
        "Worked on telecom applications including CSM, CRM, Billing, and Collection systems.",
      descBullets: [
  "Performed functional and regression testing for telecom applications (CSM, CRM, Billing, Collection)",
  "Designed and executed test cases for smoke, integration, and accessibility testing",
  "Conducted API testing using Postman and SOAP UI",
  "Validated backend data using SQL queries for data consistency",
  "Managed defect lifecycle using HP ALM and coordinated with development teams",
  "Supported production deployments and sanity testing for Bell Canada releases",
  "Collaborated with cross-functional teams to ensure complete test coverage",
  "Participated in test execution, reporting, and release validation activities"
]
    },
    {
      role: "Senior Test Engineer",
      company: "Qualitas Global Pvt. Ltd.",
	  companylogo: require("./assets/images/qualitas.png"),
      date: "Jul 2018 – Nov 2020",
      desc:
        "Worked on web and mobile testing with automation frameworks.",
      descBullets: [
  "Executed functional, regression, and compatibility testing for web and mobile applications",
  "Developed automation scripts using Selenium WebDriver with Java and Cucumber (BDD)",
  "Performed mobile testing on Android and iOS platforms with basic Appium exposure",
  "Conducted cross-browser testing across Chrome, Firefox, and Safari",
  "Performed cross-platform testing on Windows, Android, and iOS environments",
  "Created test scenarios, test cases, and executed end-to-end test cycles",
  "Managed defect lifecycle using Bugzilla and TestRail, ensuring timely resolution",
  "Worked on projects including GameBench, Pitch Hub, Entie, and Teric AI applications"
]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University (SPPU)",
	  logo: require("./assets/images/Savitribai_Phule_Pune_University_Logo.png"),
      subHeader: "B.E. Computer Engineering",
      duration: "2017",
      desc: "62.62%"
    },
    {
      schoolName: "MSBTE",
	  logo: require("./assets/images/msbte.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "2014",
      desc: "82.26%"
    },
    {
      schoolName: "SSC Board",
	  logo: require("./assets/images/Maharastra Board exam.webp"),
      subHeader: "S.S.C",
      duration: "2011",
      desc: "78.91%"
    }
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Recognition 🏆"),
  subtitle:
    "Key achievements, awards, and contributions demonstrating leadership and delivery excellence",

  achievementsCards: [
    {
      title: "GENIUS Award (H2 2025)",
      subtitle: "Outstanding performance and quality delivery",
      image: require("./assets/images/a1.png"),
      imageAlt: "GENIUS Award",
      footerLink: []   // ✅ FIX
    },
    {
      title: "GENIUS Award (H2 2024)",
      subtitle: "Exceptional contribution to project success",
      image: require("./assets/images/a1.png"),
      imageAlt: "GENIUS Award",
      footerLink: []   // ✅ FIX
    },
    {
      title: "CHAMPION Award (H2 2023)",
      subtitle: "Consistent delivery and team contribution",
      image: require("./assets/images/a2.png"),
      imageAlt: "Champion Award",
      footerLink: []   // ✅ FIX
    },
    {
      title: "Top Performer (2022–23)",
      subtitle: "High-quality delivery and client satisfaction",
      image: require("./assets/images/a4.jpg"),
      imageAlt: "Top Performer",
      footerLink: []   // ✅ FIX
    },
    {
      title: "EVANGELIST Brand Award",
      subtitle: "Contribution to branding and knowledge initiatives",
      image: require("./assets/images/a3.png"),
      imageAlt: "Evangelist Award",
      footerLink: []   // ✅ FIX
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to QA Lead, SDET, and PLM Functional Consultant opportunities. Feel free to reach out for collaboration or opportunities.",
  number: "+91-8686678181",
  number1: "+91-9011393337",
  email_address: "virenshivarkar301@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};


const certificates = {
  title: "Certifications",
  subtitle: "Professional certifications and continuous learning achievements",
  link: "https://drive.google.com/drive/folders/12Cv3dDQTQKYoO_zJ43zj2gdBxQsbQzSt?usp=sharing",
  display: true
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  technicalSkills,   // ✅ ADD THIS LINE
  certificates
};
