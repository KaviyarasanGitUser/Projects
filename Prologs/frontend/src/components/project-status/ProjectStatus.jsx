import React from "react";
import "./ProjectStatus.css";

function ProjectStatus({ status }) {
  return (
    <div className="project-status">
      <p className="project-status-text">{status.statusTitle}</p>
      <p className="project-status-value">{status.statusValue}</p>
    </div>
  );
}

export default ProjectStatus;
