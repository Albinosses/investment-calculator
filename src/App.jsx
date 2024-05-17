import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Result from "./components/Result";

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [values, setValues] = useState(INITIAL_STATE);

  const inputIsValid = values.duration >= 1;

  const onInputChange = (key, value) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [key]: +value,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput values={values} onInputChange={onInputChange} />
      {!inputIsValid && (
        <p className="center">Please, enter duration greater than zero</p>
      )}
      {inputIsValid && <Result values={values} />}
    </>
  );
}

export default App;
