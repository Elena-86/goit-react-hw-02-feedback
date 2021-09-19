import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <ButtonFeedback
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </ButtonFeedback>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackButton({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
