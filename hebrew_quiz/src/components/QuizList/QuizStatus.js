import React from "react";
import { getQuizStatus } from "../Persistence/index";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

function QuizStatus({ inverted, quizID }) {
  const quizInfo = getQuizStatus(quizID);

  if (quizInfo === null) {
    return <Icon color="grey" name="circle outline" size="large" />;
  } else if (quizInfo !== null && quizInfo.status === true) {
    return <Icon color="green" name="check circle" size="large" />;
  } else {
    return <Icon color="yellow" name="warning circle" size="large" />;
  }
}

QuizStatus.propTypes = {
  inverted: PropTypes.bool,
  quizID: PropTypes.string,
};

QuizStatus.defaultProps = {
  inverted: true,
};

export default QuizStatus;
