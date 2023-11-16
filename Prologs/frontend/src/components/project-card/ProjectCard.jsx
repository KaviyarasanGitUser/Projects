import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="home-project-menu">
      <p className="home-icon" style={{ backgroundColor: project.background }}>
        {project.icon}
      </p>
      <p className="home-project-status">{project.projectStatus}</p>
      <p className="home-project-count">{project.numberOfProject}</p>
    </div>
  );
};

export default ProjectCard;
