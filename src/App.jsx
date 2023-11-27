import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { Output } from "./components/Output";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  return (
    <>
      <InputBox inputs={inputs} setInputs={setInputs} />
      <Output inputs={inputs} />
    </>
  );
}

export default App;
