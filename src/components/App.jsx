import React from 'react';
import { useState } from 'react';
import Section from './Sections';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export function App() {
  const [Good, setIsGood] = useState(0);
  const [Neutral, setIsNeutral] = useState(0);
  const [Bad, setIsBad] = useState(0);

  const onLeaveFeedback = option => {
    // setIsGood(prevValues => prevValues + 1);
    // setIsNeutral(prevValues => prevValues + 1);
    // setIsBad(prevValues => prevValues + 1);
    switch (option) {
      case 'Good':
        setIsGood(prevValues => prevValues + 1);
        break;
      case 'Neutral':
        setIsNeutral(prevValues => prevValues + 1);
        break;
      case 'Bad':
        setIsBad(prevValues => prevValues + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Good + Neutral + Bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((Good / countTotalFeedback()) * 100) || 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}
