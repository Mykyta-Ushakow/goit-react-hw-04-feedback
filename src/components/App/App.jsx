import { useState } from 'react';
import { AppDiv } from './App.styled';

import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from 'components/Feedback/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    const name = e.currentTarget.textContent;

    name === 'good'
      ? setGood(prev => prev + 1)
      : name === 'neutral'
      ? setNeutral(prev => prev + 1)
      : setBad(prev => prev + 1);
  }

  function countTotalFeedback() {
    return [good, neutral, bad].reduce(
      (prevVal, curVal) => prevVal + curVal,
      0
    );
  }

  function countPositiveFeedbackPercentage() {
    const percent = (good / countTotalFeedback()) * 100;
    return isNaN(percent) ? 0 : percent.toFixed(0) + '%';
  }

  return (
    <AppDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </AppDiv>
  );
};
