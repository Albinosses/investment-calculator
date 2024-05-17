import InputField from "./InputField";
import { useState } from "react";

const UserInput = ({ values, onInputChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          value={values.initial_investment}
          onInputChange={(value) => {
            onInputChange("initial_investment", value);
          }}
        >
          Initial investment
        </InputField>
        <InputField
          value={values.annual_investment}
          onInputChange={(value) => {
            onInputChange("annual_investment", value);
          }}
        >
          Annual investment
        </InputField>
      </div>
      <div className="input-group">
        <InputField
          value={values.expected_return}
          onInputChange={(value) => {
            onInputChange("expected_return", value);
          }}
        >
          Expected return
        </InputField>
        <InputField
          value={values.duration}
          onInputChange={(value) => {
            onInputChange("duration", value);
          }}
        >
          Duration
        </InputField>
      </div>
    </div>
  );
};

export default UserInput;
