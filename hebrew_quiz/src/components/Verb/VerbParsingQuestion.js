/**
 * This offers a verb parsing question. This users several other components:
 *    QuizQuestion: offers the question alone with the submit buttons
 *    Verb/ParsingAnswer: offers the dropdowns for selecting the verb parsing
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Message, Button } from "semantic-ui-react";
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
      {answerStatus === CORRECT && (
        <>
          <Message positive>
            <Message.Header>Correct</Message.Header>
            <p>The answer is correct.</p>
          </Message>
          <Button positive onClick={() => setAnswerStatus(UNANSWERED)}>
            Next question
          </Button>
        </>
      )}

      {answerStatus === INCORRECT && (
        <>
          <Message negative>
            <Message.Header>Oops</Message.Header>
            <p>The answer is not correct. The correct answer is "{`${answer}`}"</p>
          </Message>
          <Button positive onClick={() => setAnswerStatus(UNANSWERED)}>
            Next question
          </Button>
        </>
      )}

      {answerStatus === UNANSWERED && (
        <QuizQuestion
          title={question}
          onSubmit={() => {
            setAnswerStatus(userAnswer === answer ? CORRECT : INCORRECT);
            onAnswered(userAnswer === answer);

            // Reset the answer if the user got it right
            if (userAnswer === answer) {
              setPerson(null);
              setGender(null);
              setNumber(null);
            }
          }}
          answerStatus={answerStatus}
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
          />
        </QuizQuestion>
      )}
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
