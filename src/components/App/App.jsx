import { Component } from 'react';

import { SectionContainer } from '../Section/Section.styled';
import Section from '../Section';
import FEEDBACK_OPTIONS from '../utils/constants';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <SectionContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        </Section>
      </SectionContainer>
    );
  }
}

export default App;
