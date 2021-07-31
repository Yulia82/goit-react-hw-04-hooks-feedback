import { Btn, ContainerBtn } from "./FeedbackOptions.styles";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerBtn>
      {options.map(option => (
        <Btn key={option} name={option} type="button" onClick={onLeaveFeedback}>
          {option}
        </Btn>
      ))}
    </ContainerBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
