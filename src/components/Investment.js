import React, { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import DisplayInvestments from "./DisplayInvestments";

function Investment() {
  // calculate value take and set here
  const [calculateObj, setCalculateObj] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSaving"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySaving"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        currentSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...

    setCalculateObj(yearlyData);
  };

  return (
    <>
      <Header />
      <Form calculateHandler={calculateHandler} />
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateObj.map((eachItem) => (
            <DisplayInvestments
              calculationItem={eachItem}
              key={eachItem.year}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Investment;
