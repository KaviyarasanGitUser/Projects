import React, { useRef, useState } from "react";
import "./GeneralInput.css";

function GeneralInput({
  label,
  htmlFor,
  placeholder,
  inputType,
  handleChange,
  name,
  id,
}) {
  const [error, setError] = useState(false);

  const validateInput = (e) => {
    const value = e.target.value;

    if (value < 0) setError(true);
    else setError(false);
    console.log(error);
  };

  return (
    <>
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="form-input"
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {error && (
        <span style={{ color: "red" }}>Please enter a valid value</span>
      )}
    </>
  );
}

export default GeneralInput;
