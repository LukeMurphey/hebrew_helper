import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Button } from 'semantic-ui-react';

function QuizQuestion({title, inverted, children, onSubmit, answerStatus}) {
    return (
        <Segment inverted={inverted}>
            <Header as="h4">{title}</Header>
            <div>
                {children}
            </div>
            <div>
                {answerStatus == null && (
                    <Button onClick={() => onSubmit()}>Submit</Button>
                )}
                {answerStatus === true && (
                    <Button positive onClick={() => onSubmit()}>Correct!!</Button>
                )}
                {answerStatus === false && (
                    <Button color='red' onClick={() => onSubmit()}>Incorrect</Button>
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
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

QuizQuestion.defaultProps = {
    inverted: false,
    answerStatus: null,
};

export default QuizQuestion;
  