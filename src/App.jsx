import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Result from "./components/Result";

const INITIAL_STATE = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [values, setValues] = useState(INITIAL_STATE);

  const onInputChange = (key, value) => {
    const numericValue = parseFloat(value);

    setValues((prevValues) => {
      return {
        ...prevValues,
        [key]: numericValue,
      };
    });
  };

  return (
    <div>
      <Header />
      <UserInput values={values} onInputChange={onInputChange} />
      <Result values={values} />
    </div>
  );
}

export default App;
