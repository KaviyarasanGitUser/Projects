import React from "react";
import "./ProjectMenu.css";
import ProjectCard from "../project-card/ProjectCard";
import { projectCardData } from "../../utils/projectMenu";

const ProjectMenu = () => {
  return (
    <div className="header-container">
      {projectCardData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectMenu;
