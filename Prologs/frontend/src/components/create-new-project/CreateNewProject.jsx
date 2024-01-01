import React, { useRef, useState } from "react";
import GeneralInput from "../general-input/GeneralInput";
import CustomInputType from "../custom-input-type/CustomInputType";
import googleLogo from "../../assest/images/google_logo.png";
import { GoPlus } from "react-icons/go";
import "./CreateNewProject.css";

function CreateNewProject({ isFormOpen }) {
  const overallDetailKey = {
    logo: "",
    fixedCost: "",
    projectStartDate: "",
    duration: "",
    totalResource: "",
    projectCompletion: "",
  };

  const weeklyDetailKey = {
    startDate: "",
    endDate: "",
    features: "",
    bugs: "",
  };

  const [overallDetail, setOverallDetail] = useState(overallDetailKey);
  const [weeklyDetail, setWeeklyDetail] = useState(weeklyDetailKey);
  const [image, setImage] = useState(null);
  const [isLogoShow, setIsLogoShow] = useState(false);

  const dateInputRef = useRef(null);

  const today = new Date().toISOString().slice(0, 10);

  const handleFocus = () => {
    dateInputRef.current.type = "date";
  };

  const handleBlur = () => {
    dateInputRef.current.type = "text";
  };

  const handleCancel = (e) => {
    e.preventDefault();
    isFormOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(overallDetail);
    console.log(weeklyDetail);
    isFormOpen();
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setIsLogoShow(!isLogoShow);
    setOverallDetail({ ...overallDetail, logo: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value <= -1) return;
    else {
      if (overallDetail.hasOwnProperty(name))
        setOverallDetail({ ...overallDetail, [name]: value });
      else setWeeklyDetail({ ...weeklyDetail, [name]: value });
    }
  };

  return (
    <div className="create-new-project">
      <p className="new-project-heading">Create New Project</p>
      <form
        className="new-project-form"
        autoComplete="off"
        onReset={(e) => handleCancel(e)}
      >
        <div className="logo-div">
          <label
            className={`add-logo-div ${isLogoShow ? "borderZero" : ""}`}
            htmlFor="logo"
          >
            {isLogoShow ? <></> : <GoPlus />}
            <img
              className={`add-logo-div logo-image ${
                isLogoShow ? "borderZero" : ""
              }`}
              src={image}
              height={50}
              width={50}
            />
          </label>
          <input
            className={`add-logo-div`}
            type="file"
            id="logo"
            name="logo"
            onChange={(e) => handleImageChange(e)}
          />
          <p className="add-logo-text">Add logo</p>
        </div>

        <div className="overall-detail-container">
          <p className="form-heading">Overall Detail</p>
          <div className="input-container">
            <div className="single-input-container">
              <GeneralInput
                htmlFor="fixedCost"
                label="T&M/Fixed Cost"
                placeholder="Enter T&M/Fixed Cost"
                inputType="number"
                id="fixedCost"
                name="fixedCost"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <CustomInputType
                htmlFor="projectStartDate"
                label="Project Start Date"
                placeholder="Enter Project Start Date"
                inputType="text"
                id="projectStartDate"
                name="projectStartDate"
                focusType="date"
                blurType="text"
                min="2000-01-01"
                max={today}
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <GeneralInput
                htmlFor="duration"
                label="Duration"
                placeholder="Enter duration"
                inputType="text"
                id="duration"
                name="duration"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <GeneralInput
                htmlFor="totalResource"
                label="Total Resource"
                placeholder="Enter Total Resource"
                inputType="number"
                id="totalResource"
                name="totalResource"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <GeneralInput
                htmlFor="projectCompletion"
                label="Overall Project% Completion"
                placeholder="Enter Overall Project% Completion"
                inputType="number"
                id="projectCompletion"
                name="projectCompletion"
                handleChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="overall-detail-container">
          <p className="form-heading">Weekly Detail</p>
          <div className="input-container">
            <div className="single-input-container">
              <CustomInputType
                htmlFor="startDate"
                label="Start Date"
                placeholder="Enter Start Date"
                inputType="text"
                id="startDate"
                name="startDate"
                focusType="date"
                blurType="text"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <CustomInputType
                htmlFor="endDate"
                label="End Date"
                placeholder="Enter End Date"
                inputType="text"
                id="endDate"
                name="endDate"
                focusType="date"
                blurType="text"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <GeneralInput
                htmlFor="features"
                label="No.of Features/Stories"
                placeholder="Enter No.of Features/Stories"
                inputType="number"
                id="features"
                name="features"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="single-input-container">
              <GeneralInput
                htmlFor="bugs"
                label="No.of Bugs"
                placeholder="Enter No.of Bugs"
                inputType="number"
                id="bugs"
                name="bugs"
                handleChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button type="reset" className="cancel-button">
            Cancel
          </button>
          <button className="done-button" onClick={(e) => handleSubmit(e)}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewProject;
