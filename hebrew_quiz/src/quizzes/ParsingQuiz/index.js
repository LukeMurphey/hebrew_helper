/**
 * This quiz offers the ability to parse verbs.
 * 
 *    1) ParsingQuiz: takes a list of verb parsing questions and present them one-by-one
 *    2) VerbParsingQuestion: presents one parsing question to the user
 *    3) ParsingAnswer: presents the UI for selecting a parse and communicates it back up to the parent
 * 
 * The answer is evaluated for correctness in the QuizQuestion::onSubmit in VerbParsingQuestion.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import VerbParsingQuestion from "../../components/Verb/VerbParsingQuestion";
import { URL_QUIZZES } from "../../components/URLs/index";
import { withRouter } from "react-router-dom";
import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";

function ParsingQuiz({ subtitle, inverted, history, title, questionSet, allowMultiplePerson }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  let question = null;

  // If the question is within the list, then get it
  // Otherwise, if it after the end then we have completed the quiz
  if (questionNumber < questionSet.length) {
    question = questionSet[questionNumber];
  }

  return (
    <>
      {!question && (
        <QuizCompleteDialog
          quizName={title}
          correctAnswers={questionSet.length}
          incorrectAnswers={incorrectAnswers}
        />
      )}
      {question && (
        <VerbParsingQuestion
          title={title}
          subtitle={subtitle}
          question={`Parse this verb: ${question["question"]}`}
          answer={question["answer"]}
          percent={100 * (questionNumber / questionSet.length)}
          inverted={inverted}
          allowMultiplePerson={allowMultiplePerson}
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

ParsingQuiz.propTypes = {
  title: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  history: PropTypes.object.isRequired,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
  allowMultiplePerson: PropTypes.bool,
};

ParsingQuiz.defaultProps = {
  inverted: false,
  allowMultiplePerson: false,
};

export default withRouter(ParsingQuiz);
