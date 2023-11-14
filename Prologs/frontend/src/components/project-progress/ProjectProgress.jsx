import React from "react";
import "./ProjectProgress.css";

function ProjectProgress({ progress }) {
  return (
    <div className="project-progress">
      <div className="progress-icon-div">
        <p className="icon">{progress.icon}</p>
      </div>
      <div className="progress-value-div">
        <div className="progress-value">{progress.progressValue}</div>
        <div className="progress-title">{progress.progressTitle}</div>
      </div>
    </div>
  );
}

export default ProjectProgress;
