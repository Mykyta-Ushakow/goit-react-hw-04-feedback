export const Statistics = props => {
  return (
    <ul className="stat-list">
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total}</li>
      <li>Positive feedback: {props.positivePercentage}</li>
    </ul>
  );
};
