import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Button } from 'semantic-ui-react';

function QuizQuestion({title, inverted, children, onSubmit}) {
    return (
        <Segment inverted={inverted}>
            <Header as="h4">{title}</Header>
            <div>
                {children}
            </div>
            <div>
                <Button onClick={() => onSubmit()}>Submit</Button>
            </div>
        </Segment>
    );
  }

QuizQuestion.propTypes = {
    title: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

QuizQuestion.defaultProps = {
    inverted: false,
};

export default QuizQuestion;
  