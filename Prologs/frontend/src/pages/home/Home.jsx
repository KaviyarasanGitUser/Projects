import React, { useState } from "react";
import "./Home.css";
import NavBar from "../../components/nav-bar/NavBar";
import ProjectMenu from "../../components/project-menu/ProjectMenu";
import ProjectDetail from "../../components/project-detail/ProjectDetail";
import CreateNewProject from "../../components/create-new-project/CreateNewProject";

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <>
      {isFormOpen ? <div
        className="create-new-project-container"
        style={{
          opacity: isFormOpen ? "1" : "0",
          zIndex: isFormOpen ? "1" : "-1",
        }}
      >
        <CreateNewProject isFormOpen={formOpen} />
      </div> : <></> }
      <div className= {`home-container ${isFormOpen ? 'brightness' : ''}`}>
        <div className="nav-bar-container">
          <NavBar />
        </div>
        <div className="home-main-container">
          <div className="home-project-menu-container">
            <ProjectMenu />
          </div>
          <div className="home-project-detail-container">
            <ProjectDetail isFormOpen={formOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
