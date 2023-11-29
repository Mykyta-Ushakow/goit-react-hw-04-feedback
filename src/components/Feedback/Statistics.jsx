import { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <ul className="stat-list">
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad: {this.props.bad}</li>
        <li>Total: {this.props.total}</li>
        <li>Positive feedback: {this.props.positivePercentage}</li>
      </ul>
    );
  }
}
