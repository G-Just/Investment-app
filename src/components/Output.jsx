import { calculateInvestmentResults, formatter } from "./investment";

export function Output({ inputs }) {
  let totalInterest = 0;
  let total = inputs.initialInvestment;
  return (
    <table id="table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investments Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>{formatter.format(inputs.initialInvestment)}</td>
          <td>{formatter.format(0)}</td>
          <td>{formatter.format(0)}</td>
          <td>{formatter.format(inputs.initialInvestment)}</td>
        </tr>
        {calculateInvestmentResults(inputs).map((entry) => {
          return (
            <tr>
              <td>{entry.year}</td>
              <td>{formatter.format(entry.valueEndOfYear)}</td>
              <td>{formatter.format(entry.interest)}</td>
              <td>{formatter.format((totalInterest += entry.interest))}</td>
              <td>{formatter.format((total += entry.annualInvestment))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
