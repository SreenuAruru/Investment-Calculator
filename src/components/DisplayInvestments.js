function DisplayInvestments(props) {
  const { calculationItem } = props;
  const {
    year,
    currentSavings,
    savingsEndOfYear,
    yearlyContribution,
    yearlyInterest,
  } = calculationItem;

  return (
    <tr>
      <td>{year}</td>
      <td>{currentSavings}</td>
      <td>{yearlyContribution}</td>
      <td>{savingsEndOfYear}</td>
      <td>{yearlyInterest}</td>
    </tr>
  );
}

export default DisplayInvestments;
