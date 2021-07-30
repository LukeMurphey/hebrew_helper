import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header, Container, Progress, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import QuizQuestion from "../QuizQuestion";
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
  const [answerStatus, setAnswerStatus] = useState(null);

  return (
    <Container style={{ marginTop: 32 }}>
      <p>
        <Icon name="close" onClick={() => onClose()} />
        {percent && <Progress percent={percent} success />}
        <Header as="h2">{title}</Header>
        <Header as="h3" color="grey">
          {subtitle}
        </Header>
        <QuizQuestion
          title={question}
          onSubmit={() => onAnswered(userAnswer === answer)}
          answerStatus={answerStatus}
        >
          <ParsingAnswer
            inverted={inverted}
            onChange={(a) => {
              setUserAnswer(a);
              setAnswerStatus(a === answer);
            }}
          />
          <div>{userAnswer}</div>
        </QuizQuestion>
      </p>
    </Container>
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
