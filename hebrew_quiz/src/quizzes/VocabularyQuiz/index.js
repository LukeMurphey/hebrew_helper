/**
 * This component provides a way to provide a matching quiz of words to definitions.
 *
 * Some caveats:
 *    * This doesn't support quizzes where the same question text is in the answers list more than once.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { URL_HOME } from "../../components/URLs/index";
import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";
import MatchingQuestion from "../../components/MatchingQuestion";

function VocabularyQuiz({ inverted, title, maxPerPage, questionSet, history }) {
  const [pageNumber, setPageNumber] = useState(0);

  // Chop up the vocab list
  const pageCount = Math.ceil((1.0 * questionSet.length) / maxPerPage);
  const [currentPage, setCurrentPage] = useState(null);

  // Chop up the question set when the page number changes
  useEffect(() => {
    const startOffset = pageNumber * maxPerPage;
    const endOffset = (pageNumber + 1) * maxPerPage;

    setCurrentPage(questionSet.slice(startOffset, endOffset));
  }, [pageNumber, questionSet, maxPerPage]);

  return (
    <>
      {pageNumber < pageCount && (
        <MatchingQuestion
          inverted={inverted}
          title={title}
          percent={100 * (pageNumber / pageCount)}
          onClose={() => history.push(URL_HOME)}
          onAnswered={() => {
            setPageNumber(pageNumber + 1);
          }}
          questionSet={currentPage}
          maxPerPage={maxPerPage}
        />
      )}
      {pageNumber >= pageCount && <QuizCompleteDialog quizName={title} />}
    </>
  );
}

VocabularyQuiz.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  maxPerPage: PropTypes.number,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
  history: PropTypes.object.isRequired,
};

VocabularyQuiz.defaultProps = {
  inverted: true,
  title: "Vocabulary quiz",
  maxPerPage: 5,
};

export default withRouter(VocabularyQuiz);
