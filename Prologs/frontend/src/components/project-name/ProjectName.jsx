import React from "react";
import "./ProjectName.css";

function ProjectName({ projectDetail }) {
  return (
    <div className="project-name-div">
      <div className="project-name">
        <span className="project-text">
          <p>{projectDetail.projectName}</p>
        </span>
        <img className="project-icon" src={projectDetail.projectLogo} />
        <p
          className="project-detail-badge primary-badge"
          style={{ display: projectDetail.hRisk ? "inline" : "none" }}
        >
          H-Risk
        </p>
        <p
          className="project-detail-badge secondary-badge"
          style={{ display: projectDetail.inProgress ? "inline" : "none" }}
        >
          Inprogress
        </p>
      </div>
      <div className="project-duration">
        <p className="progress-text">Duration: {projectDetail.duration}</p>
      </div>
    </div>
  );
}

export default ProjectName;
