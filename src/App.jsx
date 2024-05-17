import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

const INITIAL_STATE = {
  initial_investment: "",
  annual_investment: "",
  expected_return: "",
  duration: "",
};

function App() {
  const [values, setValues] = useState(INITIAL_STATE);

  const onInputChange = (key, value) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [key]: value,
      };
    });

    console.log(values);
  };

  return (
    <div>
      <Header />
      <UserInput values={values} onInputChange={onInputChange} />
    </div>
  );
}

export default App;
