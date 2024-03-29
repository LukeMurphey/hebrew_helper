/**
 * This component provides a way to provide a matching quiz of words to definitions.
 *
 * Some caveats:
 *    * This doesn't support quizzes where the same question text is in the answers list more than once.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { URL_QUIZZES } from "../../components/URLs/index";
import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";
import MakeSentenceQuestion from "../../components/Questions/MakeSentenceQuestion/index";

function MakeSentenceQuiz({ inverted, title, questionSet, onQuizDone, history }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // If we are done, then report the quiz status
  if(pageNumber >= questionSet.length) {
    onQuizDone(incorrectAnswers === 0);
  }

  return (
    <>
      {pageNumber < questionSet.length && (
        <MakeSentenceQuestion
          inverted={inverted}
          title={`Construct ${questionSet[pageNumber].title}`}
          sentence={questionSet[pageNumber].sentence}
          answer={questionSet[pageNumber].answer}
          onClose={() => history.push(URL_QUIZZES)}
          onAnswered={(correct) => {
            if(correct){
                setPageNumber(pageNumber + 1);
            }
            if(!correct){
              setIncorrectAnswers(incorrectAnswers+1);
            }
          }}
          percent={100 * (pageNumber / questionSet.length)}
        />
      )}
      {pageNumber >= questionSet.length && (
        <QuizCompleteDialog quizName={title} />
      )}
    </>
  );
}

MakeSentenceQuiz.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
  history: PropTypes.object.isRequired,
  onQuizDone: PropTypes.func,
};

MakeSentenceQuiz.defaultProps = {
  inverted: true,
  title: "Make a sentence",
  onQuizDone: () => {},
};

export default withRouter(MakeSentenceQuiz);
