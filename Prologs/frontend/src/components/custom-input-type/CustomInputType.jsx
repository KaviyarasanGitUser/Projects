import React, { useRef } from "react";

function CustomInputType({
  label,
  htmlFor,
  inputType,
  name,
  id,
  placeholder,
  handleChange,
  focusType,
  blurType,
  min,
  max,
}) {
  const dateInputRef = useRef(null);
  const handleFocus = () => {
    dateInputRef.current.type = focusType;
    console.log(min,max);
  };

  const handleBlur = () => {
    dateInputRef.current.type = blurType;
  };
  return (
    <>
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        ref={dateInputRef}
        className="form-input"
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
        min={min}
        max={max}
      />
    </>
  );
}

export default CustomInputType;
