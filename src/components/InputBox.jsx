import Image from "../assets/icon.png";

export function InputBox({ inputs, setInputs }) {
  console.log(inputs);
  return (
    <>
      <div id="main">
        <img id="icon" src={Image} />
        <h1>Investment Calculator</h1>
        <div id="input-box">
          <div className="input-container">
            <label>Initial investment ($)</label>
            <input
              type="number"
              name="initialInvestment"
              id="initialInvestment"
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  initialInvestment: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="input-container">
            <label>Annual investment ($)</label>
            <input
              type="number"
              name="annualInvestment"
              id="annualInvestment"
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  annualInvestment: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="input-container">
            <label>Expected return (%)</label>
            <input
              type="number"
              name="expectedReturn"
              id="expectedReturn"
              onChange={(e) =>
                setInputs({ ...inputs, expectedReturn: Number(e.target.value) })
              }
            />
          </div>
          <div className="input-container">
            <label>Duration (years)</label>
            <input
              type="number"
              name="duration"
              id="duration"
              onChange={(e) => setInputs({ ...inputs, duration: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
