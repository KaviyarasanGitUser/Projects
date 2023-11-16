import React from "react";
import "./ProjectDetail.css";
import { RiEqualizerLine } from "react-icons/ri";
import ProjectDetailCard from "../project-detail-card/ProjectDetailCard";
import { projectDetailData } from "../../utils/projectDetails";

function ProjectDetail() {
  return (
    <>
      <div className="project-detail-header">
        <div className="project-text">
          <p>Projects</p>
        </div>
        <div className="button-div">
          <button className="project-detail-button filter">
            Filter
            <RiEqualizerLine className="filter-icon" />
          </button>
          <button className="project-detail-button create">+ Create New</button>
        </div>
      </div>
      <div className="home-project-detail">
        {projectDetailData.map((projectDetail) => {
          return <ProjectDetailCard projectDetail={projectDetail} />;
        })}
      </div>
    </>
  );
}

export default ProjectDetail;
