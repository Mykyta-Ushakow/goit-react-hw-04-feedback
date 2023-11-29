import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul className="button-list">
        {this.props.options.map(option => (
          <li key={uuidv4()}>
            <button type="button" onClick={this.props.onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
