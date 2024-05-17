import { useState } from "react";

const InputField = ({ children, value, onInputChange }) => {
  return (
    <p>
      <label>{children}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        required
      />
    </p>
  );
};

export default InputField;
