import InputField from "./InputField";
import { useState } from "react";

const UserInput = ({ values, onInputChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          value={values.initialInvestment}
          onInputChange={(value) => {
            onInputChange("initialInvestment", value);
          }}
        >
          Initial investment
        </InputField>
        <InputField
          value={values.annualInvestment}
          onInputChange={(value) => {
            onInputChange("annualInvestment", value);
          }}
        >
          Annual investment
        </InputField>
      </div>
      <div className="input-group">
        <InputField
          value={values.expectedReturn}
          onInputChange={(value) => {
            onInputChange("expectedReturn", value);
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
