import React from "react";
import "./TechnicalSkills.css";
import { technicalSkills } from "../../portfolio";

export default function TechnicalSkills() {
  if (!technicalSkills.display) {
    return null;
  }

  return (
    <div className="main" id="technicalSkills">
      <h1>{technicalSkills.title}</h1>

      {technicalSkills.skills.map((skill, i) => {
  return (
    <div key={i} className="skill-category">
      <p>
        <span className="skill-title">{skill.category} → </span>
        <span className="skill-items">{skill.items}</span>
      </p>
    </div>
  );
})}
    </div>
  );
}