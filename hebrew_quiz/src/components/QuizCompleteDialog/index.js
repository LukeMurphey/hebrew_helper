import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Button} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { URL_QUIZZES } from "../URLs/index";

function QuizCompleteDialog({
  quizName,
  inverted,
  history
}) {
  return (
    <Container style={{ marginTop: 32 }}>
      <p>
        <Header as="h2">You have successfully completed the quiz for {quizName}</Header>
        <Button onClick={() => history.push(URL_QUIZZES)}>Return to Quiz List</Button>
    </p>
    </Container>
  );
}

QuizCompleteDialog.propTypes = {
  quizName: PropTypes.string,
  inverted: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

QuizCompleteDialog.defaultProps = {
  inverted: false,
};

export default withRouter(QuizCompleteDialog);
