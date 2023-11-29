import { v4 as uuidv4 } from 'uuid';

export const FeedbackOptions = props => {
  return (
    <ul className="button-list">
      {props.options.map(option => (
        <li key={uuidv4()}>
          <button type="button" onClick={props.onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
