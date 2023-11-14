import React from "react";
import "../home/Home.css";
import "./ProjectDetails.css";
import NavBar from "../../components/nav-bar/NavBar";
import ProjectName from "../../components/project-name/ProjectName";
import ProjectProgress from "../../components/project-progress/ProjectProgress";
import ProjectDuration from "../../components/project-duration/ProjectDuration";
import ProjectStatus from "../../components/project-status/ProjectStatus";
import ProjectRequirements from "../../components/project-requirements/ProjectRequirements";
import { projectDetail } from "../../utils/projectDetail";
import { projectProgress } from "../../utils/projectProgress";
import { projectStatus } from "../../utils/projectStatus";
import { projectRequirements } from "../../utils/projectRequirements";

function ProjectDetails() {
  return (
    <>
      <div className="nav-bar-container">
        <NavBar />
      </div>
      <div className="main-container">
        <div className="main-div">
          <p className="secondary-heading">Project Details</p>
          <div className="project-name-container">
            <ProjectName projectDetail={projectDetail[0]} />
          </div>
          <div className="project-progress-container">
            <div className="project-progress-div">
              {projectProgress.map((progress) => {
                return <ProjectProgress progress={progress} />;
              })}
            </div>
          </div>
          <div className="project-duration-container">
            <ProjectDuration />
          </div>
          <div className="project-detail-container">
            <div className="project-status-container">
              {projectStatus.map((status) => {
                return <ProjectStatus status={status} />;
              })}
            </div>
            <div className="project-requirements-container">
              {projectRequirements.map((requirement) => {
                return <ProjectRequirements requirement={requirement} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
