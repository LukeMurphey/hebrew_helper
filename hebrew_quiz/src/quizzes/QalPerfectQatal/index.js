import React, { useState } from "react";
import PropTypes from "prop-types";
import VerbParsingQuestion from "../../components/Verb/VerbParsingQuestion";
import { URL_QUIZZES } from "../../components/URLs/index";
import { withRouter } from "react-router-dom";
import questions from "./questions.json";
import { shuffle } from "../../components/Utils/index";
import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";

// Shuffle the questions so that users don't see the exact same questions every time
const shuffledQuestions = shuffle(questions);

function QalPerfectQatal({ subtitle, inverted, history, title }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  let question = null;

  // If the question is within the list, then get it
  // Otherwise, if it after the end then we have completed the quiz
  if (questionNumber < shuffledQuestions.length) {
    question = shuffledQuestions[questionNumber];
  }

  return (
    <>
      {!question && (
        <QuizCompleteDialog
          quizName={title}
          correctAnswers={shuffledQuestions.length}
          incorrectAnswers={incorrectAnswers}
        />
      )}
      {question && (
        <VerbParsingQuestion
          title={title}
          subtitle={subtitle}
          question={`Parse this verb: ${question["question"]}`}
          answer={question["answer"]}
          percent={100 * (questionNumber / questions.length)}
          inverted={inverted}
          onClose={() => history.push(URL_QUIZZES)}
          onAnswered={(correct) => {
            if (correct) {
              setQuestionNumber(1 + questionNumber);
            }
            if (!correct) {
              setIncorrectAnswers(incorrectAnswers + 1);
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
