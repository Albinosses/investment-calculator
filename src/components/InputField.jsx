import { useState } from "react";

const InputField = ({ children, value, onInputChange }) => {
  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
