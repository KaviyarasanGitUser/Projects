import React from "react";
import "./Home.css";
import NavBar from "../../components/nav-bar/NavBar";
import ProjectMenu from "../../components/project-menu/ProjectMenu";
import ProjectDetail from "../../components/project-detail/ProjectDetail";
import CreateNewProject from "../../components/create-new-project/CreateNewProject";

function Home() {
  return (
    <>
      <div className="create-new-project-container">
        <CreateNewProject />
      </div>
      <div className="home-container">
        <div className="nav-bar-container">
          <NavBar />
        </div>
        <div className="home-main-container">
          <div className="home-project-menu-container">
            <ProjectMenu />
          </div>
          <div className="home-project-detail-container">
            <ProjectDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
