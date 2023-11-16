import React from "react";
import "./CreateNewProject.css";

function CreateNewProject() {
  return (
    <div className="create-new-project">
      <p className="new-project-heading">Create New Project</p>
      <form className="new-project-form">
        <div className="logo-div">
          <label className="add-logo-div" htmlFor="logo">
            +
          </label>
          <input className="add-logo-div" type="file" id="logo" />
          <p className="add-logo-text">Add logo</p>
        </div>

        <div className="overall-detail-container">
          <p className="form-heading">Overall Detail</p>
          <div className="input-container">
            <div className="single-input-container">
              <label className="form-label" htmlFor="fixedCost">
                T&M/Fixed Cost
              </label>
              <input
                className="form-input"
                type="number"
                name="fixedCost"
                id="fixedCost"
                placeholder="Enter T&M/Fixed Cost"
              />
              <input
                className="form-input"
                type="number"
                name="fixedCost"
                id="fixedCost"
                placeholder="Enter T&M/Fixed Cost"
              />
              <input
                className="form-input"
                type="number"
                name="fixedCost"
                id="fixedCost"
                placeholder="Enter T&M/Fixed Cost"
              />
              <input
                className="form-input"
                type="number"
                name="fixedCost"
                id="fixedCost"
                placeholder="Enter T&M/Fixed Cost"
              />
              <input
                className="form-input"
                type="number"
                name="fixedCost"
                id="fixedCost"
                placeholder="Enter T&M/Fixed Cost"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNewProject;
