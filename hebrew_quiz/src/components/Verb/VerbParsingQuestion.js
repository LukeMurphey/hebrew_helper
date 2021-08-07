/**
 * This offers a verb parsing question. This users several other components:
 *    QuizQuestion: offers the question alone with the submit buttons
 *    Verb/ParsingAnswer: offers the dropdowns for selecting the verb parsing
 */
import React, { useState, useEffect } from "react";
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

  const [person, setPerson] = useState(null);
  const [gender, setGender] = useState(null);
  const [number, setNumber] = useState(null);

  return (
    <QuizContainer
      title={title}
      subtitle={subtitle}
      percent={percent}
      onClose={onClose}
  >
      <QuizQuestion
        title={question}
        onSubmit={() => {
          if(answerStatus === CORRECT || answerStatus === INCORRECT) {
            // We have confirmed the answer status and now need to move to the next question
            setAnswerStatus(UNANSWERED);

            // Reset the answer
            setPerson(null);
            setGender(null);
            setNumber(null);
          }

          // If the answer status is correct, then the user has acknowledged the correct answer and wants to move on
          if(answerStatus === CORRECT ) {
            // Tell the caller that the question was answered and we should move to the next question
            onAnswered(true);
          }

          // If the answer status is incorrect, then the user has acknowledged the correct answer and wants to move on
          if(answerStatus === INCORRECT ) {
            // Tell the caller that the question was answered and we should move to the next question
            onAnswered(false);
          }

          // Stop if the user hasn't filled out enough of the answer
          // Otherwise, set the answer status
          else if (answerStatus === UNANSWERED && person !== null && gender !== null && number !== null) {
            setAnswerStatus(userAnswer === answer ? CORRECT : INCORRECT);
          }
        }}
        answerStatus={answerStatus}
        correctAnswer={answer}
      >
        <ParsingAnswer
          inverted={inverted}
          question={question}
          onChange={(p, g, n) => {
            setPerson(p);
            setGender(g);
            setNumber(n);

            if (p && g && n) {
              setUserAnswer(`${p}${g}${n}`);
            }
          }}
          person={person}
          gender={gender}
          number={number}
          disabled={answerStatus !== UNANSWERED}
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
