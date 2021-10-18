import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";

function SelectCorrectTranslationQuestion({
  inverted,
  title,
  subtitle,
  percent,
  onClose,
  sentence,
  onAnswered,
  answer,
  answers,
}) {
  return (
    <MultipleChoiceQuestion
      title={title}
      inverted={inverted}
      subtitle={subtitle}
      percent={percent}
      onClose={onClose}
      onAnswered={onAnswered}
      correctAnswer={answer}
      question={"Select the Best Translation for:"}
      sentence={sentence}
      answers={answers}
    />
  );
}

SelectCorrectTranslationQuestion.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
  percent: PropTypes.number,
};

SelectCorrectTranslationQuestion.defaultProps = {
  inverted: false,
};

export default SelectCorrectTranslationQuestion;