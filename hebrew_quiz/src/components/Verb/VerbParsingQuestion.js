/**
 * This offers a verb parsing question. This users several other components:
 *    QuizQuestion: offers the question alone with the submit buttons
 *    Verb/ParsingAnswer: offers the dropdowns for selecting the verb parsing
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import QuizQuestion from "../QuizQuestion";
import { UNANSWERED, CORRECT, INCORRECT } from "../QuizQuestion/constants";
import QuizContainer from "../QuizContainer";
import ParsingAnswer from "../Verb/ParsingAnswer";

// https://github.com/LukeMurphey/learning_biblical_hebrew_flashcards/blob/master/qal_perfect_qatal.csv
function VerbParsingQuestion({
  title,
  subtitle,
  inverted,
  percent,
  onClose,
  onAnswered,
  question,
  answer,
}) {
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(UNANSWERED);

  return (
    <QuizContainer title={title} subtitle={subtitle} percent={percent} onClose={onClose}>
      <QuizQuestion
        title={question}
        onSubmit={() => {
          setAnswerStatus(userAnswer === answer ? CORRECT : INCORRECT);
          onAnswered(userAnswer === answer);
        }}
        answerStatus={answerStatus}
      >
        <ParsingAnswer
          inverted={inverted}
          onChange={(a) => {
            if (a) {
              setUserAnswer(a);
            }
          }}
        />
      </QuizQuestion>
    </QuizContainer>
  );
}

VerbParsingQuestion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  inverted: PropTypes.bool,
  percent: PropTypes.number,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
};

VerbParsingQuestion.defaultProps = {
  inverted: false,
  percent: null,
};

export default withRouter(VerbParsingQuestion);
