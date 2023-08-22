import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

function Form(props) {
  const { calculateHandler } = props;

  const [formDeatils, setFormDeatils] = useState({
    currentSaving: "",
    yearlySaving: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDeatils({ ...formDeatils, [name]: value });
  };

  const calculateSubmit = (event) => {
    event.preventDefault();

    const userInput = {
      id: uuid4(),
      currentSaving: formDeatils.currentSaving,
      yearlySaving: formDeatils.yearlySaving,
      expectedReturn: formDeatils.expectedReturn,
      duration: formDeatils.duration,
    };
    calculateHandler(userInput);
  };

  return (
    <form className="form" onSubmit={calculateSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="currentSaving"
            value={formDeatils.currentSaving}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearlySaving"
            value={formDeatils.yearlySaving}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expectedReturn"
            value={formDeatils.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formDeatils.duration}
            onChange={handleChange}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
