/**
 * This component provides a single quiz question.
 * 
 * There are several props you will want to use:
 *   onSubmit: providing this will cause the question to show a "submit" button. The callback will be called when the
 *             user pressed the button.
 *   answerStatus: indicates if the answer was correct, incorrect, or unanswered. This causes the dialog to show a
 *                 little green or red banner telling they got it right/wrong.
 *   correctAnswer: the string that should be shown when the user gets the answer wrong
 */

import React from "react";
import PropTypes from "prop-types";
import { Header, Segment, Button, Message } from "semantic-ui-react";
import { UNANSWERED, CORRECT, INCORRECT } from "../QuizQuestion/constants";

function QuizQuestion({
  title,
  inverted,
  children,
  onSubmit,
  answerStatus,
  correctAnswer,
}) {
  return (
    <Segment inverted={inverted}>
      <Header as="h2">{title}</Header>
      <div>{children}</div>
      <div style={{ marginTop: 16 }}>
        {answerStatus === UNANSWERED && onSubmit !== null && (
          <Button onClick={() => onSubmit()}>Submit</Button>
        )}
        {answerStatus === CORRECT && onSubmit !== null && (
          <>
            <Message positive>
              <Message.Header>Yay</Message.Header>
              <p>The answer is correct.</p>
            </Message>

            <Button positive onClick={() => onSubmit()}>
              Next
            </Button>
          </>
        )}
        {answerStatus === INCORRECT && onSubmit !== null && (
          <>
            <Message negative>
              <Message.Header>Oops</Message.Header>
              <p>
                The answer is not correct.
                {correctAnswer !== null &&
                  ` The correct answer is "${correctAnswer}"`}
              </p>
            </Message>
            <Button color="red" onClick={() => onSubmit()}>
              Try Again
            </Button>
          </>
        )}
      </div>
    </Segment>
  );
}

QuizQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  answerStatus: PropTypes.oneOf([UNANSWERED, CORRECT, INCORRECT]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func,
  correctAnswer: PropTypes.string,
};

QuizQuestion.defaultProps = {
  inverted: false,
  answerStatus: null,
  correctAnswer: null,
  onSubmit: null,
};

export default QuizQuestion;
