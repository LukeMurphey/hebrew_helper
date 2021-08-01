import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header, Container, Progress, Icon } from "semantic-ui-react";
import QuizContainer from "../QuizContainer";
import { withRouter } from "react-router-dom";

// https://github.com/LukeMurphey/learning_biblical_hebrew_flashcards/blob/master/qal_perfect_qatal.csv
function MatchingQuestion({
  title,
  subtitle,
  inverted,
  percent,
  onClose,
  questions,
  answers,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [correctQuestions, setCorrectQuestions] = useState(null);
  // const [correctAnswers, setCorrectAnswers] = useState(null);

  return (
    <QuizContainer title={title} subtitle={subtitle} percent={percent} onClose={onClose}></QuizContainer>
  );
}

MatchingQuestion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  inverted: PropTypes.bool,
  percent: PropTypes.number,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
};

MatchingQuestion.defaultProps = {
  inverted: false,
  percent: null,
};

export default withRouter(MatchingQuestion);
