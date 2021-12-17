/**
 * This component provides a way to provide a matching quiz of words to definitions.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { URL_QUIZZES } from "../../components/URLs/index";
import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";
import MatchingQuestion from "../../components/Questions/MatchingQuestion";

function MatchingQuiz({ inverted, title, maxPerPage, questionSet, onQuizDone, history, questionsFontSize, answersFontSize }) {
  const [pageNumber, setPageNumber] = useState(0);

  // Chop up the vocab list
  const pageCount = Math.ceil((1.0 * questionSet.length) / maxPerPage);
  const [currentPage, setCurrentPage] = useState(null);

  // Track answer status
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // Chop up the question set when the page number changes
  useEffect(() => {
    const startOffset = pageNumber * maxPerPage;
    const endOffset = (pageNumber + 1) * maxPerPage;

    setCurrentPage(questionSet.slice(startOffset, endOffset));
  }, [pageNumber, questionSet, maxPerPage]);

  // Send up status if we are done
  if(pageNumber >= pageCount && onQuizDone) {
    onQuizDone(incorrectAnswers === 0);
  }

  return (
    <>
      {pageNumber < pageCount && (
        <MatchingQuestion
          inverted={inverted}
          title={title}
          percent={100 * (pageNumber / pageCount)}
          onClose={() => history.push(URL_QUIZZES)}
          onAnswered={(correct) => {
            setPageNumber(pageNumber + 1);
            if(!correct){
              setIncorrectAnswers(incorrectAnswers+ 1);
            }
          }}
          questionSet={currentPage}
          maxPerPage={maxPerPage}
          questionsFontSize={questionsFontSize}
          answersFontSize={answersFontSize}
        />
      )}
      {pageNumber >= pageCount && <QuizCompleteDialog quizName={title} />}
    </>
  );
}

MatchingQuiz.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  maxPerPage: PropTypes.number,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
  history: PropTypes.object.isRequired,
  onQuizDone: PropTypes.func,
  questionsFontSize: PropTypes.number,
  answersFontSize: PropTypes.number,
};

MatchingQuiz.defaultProps = {
  inverted: true,
  title: "Vocabulary quiz",
  maxPerPage: 5,
  onQuizDone: () => {},
  questionsFontSize: null,
  answersFontSize: null,
};

export default withRouter(MatchingQuiz);
