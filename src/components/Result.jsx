import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ values }) => {
  let investmentsResults = calculateInvestmentResults(values);
  let investedCapital = values.initialInvestment;
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest(Year)</th>
          <th scope="col">Total interest</th>
          <th scope="col">Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentsResults &&
          investmentsResults.map((item) => {
            console.log(item);
            totalInterest += item.interest;
            investedCapital += item.annualInvestment;
            return (
              <tr>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Result;
