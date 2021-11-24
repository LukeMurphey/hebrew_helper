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
  correctAnswer,
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
      correctAnswer={correctAnswer}
      question={"Select the Best Translation for:"}
      sentence={sentence}
      answers={answers}
      answerFontSize={'18px'}
      answerPadding={'10px'}
      sentenceFontSize={'20px'}
    />
  );
}

SelectCorrectTranslationQuestion.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
  percent: PropTypes.number,
};

SelectCorrectTranslationQuestion.defaultProps = {
  inverted: false,
};

export default SelectCorrectTranslationQuestion;
