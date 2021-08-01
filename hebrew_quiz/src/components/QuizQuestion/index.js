import React from "react";
import PropTypes from "prop-types";
import { Header, Segment, Button } from "semantic-ui-react";
import { UNANSWERED, CORRECT, INCORRECT } from "../QuizQuestion/constants";

function QuizQuestion({ title, inverted, children, onSubmit, answerStatus }) {
  return (
    <Segment inverted={inverted}>
      <Header as="h2">{title}</Header>
      <div>{children}</div>
      <div style={{ marginTop: 16 }}>
        {answerStatus === UNANSWERED && (
          <Button onClick={() => onSubmit()}>Submit</Button>
        )}
        {answerStatus === CORRECT && (
          <Button positive onClick={() => onSubmit()}>
            Correct!
          </Button>
        )}
        {answerStatus === INCORRECT && (
          <Button color="red" onClick={() => onSubmit()}>
            Incorrect
          </Button>
        )}
      </div>
    </Segment>
  );
}

QuizQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  answerStatus: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

QuizQuestion.defaultProps = {
  inverted: false,
  answerStatus: null,
};

export default QuizQuestion;
