import React, { useState } from "react";
import PropTypes from "prop-types";
import VerbParsingQuestion from "../Verb/VerbParsingQuestion";
import { URL_HOME } from "../URLs/index";
import { withRouter } from "react-router-dom";
import questions from "./questions.json";

function QalPerfectQatal({ subtitle, inverted, history }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const question = questions[questionNumber];

  return (
    <>
      <VerbParsingQuestion
        title={"Parse this verb"}
        subtitle={subtitle}
        question={question["question"]}
        answer={question["answer"]}
        percent={questionNumber / questions.length}
        inverted={inverted}
        onClose={() => history.push(URL_HOME)}
        onAnswered={(correct) => {
          if(correct) {
            setQuestionNumber(1 + questionNumber);
          }
        }}
      />
    </>
  );
}

QalPerfectQatal.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

QalPerfectQatal.defaultProps = {
  inverted: false,
  subtitle: "Qal Perfect Qatal",
};

export default withRouter(QalPerfectQatal);
