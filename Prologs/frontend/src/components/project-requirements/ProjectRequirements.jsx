import React from "react";
import "./ProjectRequirements.css";

function ProjectRequirements({ requirement }) {
  return (
    <>
      <div className="project-requirement">
        <div className="requirement">
          <div className="requirement-heading">
            <p className="requirement-heading-name">
              {requirement.requirementTitle}
            </p>
            <div
              className="requirement-badge"
              style={{
                backgroundColor: requirement.backgroundColor,
                color: requirement.color,
              }}
            >
              {requirement.badge}
            </div>
          </div>
          <div className="requirement-list">
            <ul>
              {requirement.text.map((element) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectRequirements;
