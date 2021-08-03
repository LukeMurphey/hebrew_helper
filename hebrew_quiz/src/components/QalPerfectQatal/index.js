import React, { useState } from "react";
import PropTypes from "prop-types";
import VerbParsingQuestion from "../Verb/VerbParsingQuestion";
import { URL_HOME } from "../URLs/index";
import { withRouter } from "react-router-dom";
import questions from "./questions.json";
import { shuffle } from "../Utils/index";
import QuizCompleteDialog from "../QuizCompleteDialog/index";

function QalPerfectQatal({ subtitle, inverted, history, title }) {
  const shuffledQuestions= shuffle(questions);
  const [questionNumber, setQuestionNumber] = useState(0);
  let question = null;
  
  if( questionNumber < shuffledQuestions.length ){
    question = shuffledQuestions[questionNumber];
  }

  return (
    <>
      { !question && (
        <QuizCompleteDialog quizName={title} />
      )
      }
      { question && (
      <VerbParsingQuestion
        title={title}
        subtitle={subtitle}
        question={`Parse this verb: ${question["question"]}`}
        answer={question["answer"]}
        percent={100 * (questionNumber / questions.length)}
        inverted={inverted}
        onClose={() => history.push(URL_HOME)}
        onAnswered={(correct) => {
          if(correct) {
            setQuestionNumber(1 + questionNumber);
          }
        }}
      />
      )}
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
  title: "Qal Perfect (Qatal)",
};

export default withRouter(QalPerfectQatal);
