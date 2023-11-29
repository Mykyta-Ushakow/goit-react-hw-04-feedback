import { Component } from 'react';
import { AppDiv } from './App.styled';

import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics';
import { Section } from './Section';
import { Notification } from 'components/Feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.currentTarget.textContent;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevVal, curVal) => prevVal + curVal,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return isNaN(percent) ? 0 : percent.toFixed(0) + '%';
  };

  render() {
    return (
      <AppDiv>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}

        {/* <Feedback initialValue={this.state} /> */}
      </AppDiv>
    );
  }
}
