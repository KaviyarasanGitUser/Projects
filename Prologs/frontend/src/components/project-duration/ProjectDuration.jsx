import React from "react";
import "./ProjectDuration.css";

function ProjectDuration() {
  return (
    <>
      <div className="duration">
        <select className="month">
          <option value="January">January</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
        <div className="week">
          <div className="week-individual">Week1</div>
          <div className="week-individual">Week2</div>
          <div className="week-individual">Week3</div>
          <div className="week-individual">Week4</div>
        </div>
      </div>
      <div className="update-btn">Update</div>
    </>
  );
}

export default ProjectDuration;
