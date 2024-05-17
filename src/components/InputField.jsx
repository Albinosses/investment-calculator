import { useState } from "react";

const InputField = ({ children, value, onInputChange }) => {
  const [showModal, setShowModal] = useState(false);

  const validateInput = (e) => {
    const input = e.target.value;

    console.log(input);
    if (parseFloat(input) >= 0) {
      onInputChange(input);
    } else {
      onInputChange(0);
      alert("Wrong number. Number must be >= 0");
    }
  };

  return (
    <div>
      {showModal && <Modal />}
      <label>{children}</label>
      <input type="number" value={value} onChange={validateInput} min={0} />
    </div>
  );
};

export default InputField;
