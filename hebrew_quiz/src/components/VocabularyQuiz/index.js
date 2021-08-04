/**
 * This component provides a way to provide a matching quiz of words to definitions.
 * 
 * Some caveats:
 *    * This doesn't support quizzes where the same question text is in the answers list more than once.
 */
import React, { useState, useEffect } from "react";
import { Grid, Divider, Segment, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { UNANSWERED, CORRECT, INCORRECT } from "../QuizQuestion/constants";
import QuizCompleteDialog from "../QuizCompleteDialog/index";
import QuizQuestion from "../QuizQuestion";
import { shuffle } from "../Utils/index";

function VocabularyQuiz({ inverted, title, maxPerPage, questionSet }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [answerStatus, setAnswerStatus] = useState(UNANSWERED);
  const [pageNumber, setPageNumber] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [completedAnswers, setCompletedAnswers] = useState([]);

  // Chop up the vocab list
  const pageCount = Math.ceil((1.0 * questionSet.length) / maxPerPage);
  const startOffset = pageNumber * maxPerPage;
  const endOffset = (pageNumber + 1) * maxPerPage;
  const [currentPage, setCurrentPage] = useState(null);

  // Shuffle both sets so that we can make sure the left and the right doesn't match
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  function isQuestionAnswered(i) {
    return completedQuestions.includes(i);
  }

  function isAnswered(i) {
    return completedAnswers.includes(i);
  }

  function getIndexOfAnswer(i) {
    // Get the question for the index
    const question = shuffledQuestions[i];

    return shuffledAnswers.findIndex(
      (entry) => entry.definition === question.definition
    );
  }

  useEffect(() => {
    // Evaluate the result if both an answer and question have been selected
    if (selectedQuestion !== null && selectedAnswer !== null) {
      // Determine what the correct answer is
      const correctAnswerIndex = getIndexOfAnswer(selectedQuestion);

      // If correct, then update the UI accordingly
      if (correctAnswerIndex === selectedAnswer) {
        // Add to the correct list
        setCompletedQuestions(completedQuestions.concat([selectedQuestion]));
        setCompletedAnswers(completedAnswers.concat([selectedAnswer]));

        // Unselect the existing entries
        setSelectedQuestion(null);
        setSelectedAnswer(null);
      }
    }
  }, [selectedQuestion, selectedAnswer]);

  // Chop up the question set when the page number changes
  useEffect(() => {
    setCurrentPage(questionSet.slice(startOffset, endOffset));
  }, [pageNumber, startOffset, endOffset]);

  // Shuffle the questions and the answers so they don't match in an obvious way
  useEffect(() => {
    if (currentPage !== null) {
      setShuffledQuestions(shuffle([...currentPage]));
      setShuffledAnswers(shuffle([...currentPage]));
    }
  }, [currentPage]);

  return (
    <QuizQuestion
      title={title}
      onSubmit={() => {
        setPageNumber(pageNumber + 1);
        if (answerStatus === CORRECT) {
          // We have confirmed the answer status and now need to move to the next question
          setAnswerStatus(UNANSWERED);

          // Tell the caller that the question was answered and we should move to the next question
          // onAnswered(userAnswer === answer);
        } else {
          // setAnswerStatus(userAnswer === answer ? CORRECT : INCORRECT);
        }
      }}
      answerStatus={answerStatus}
      // correctAnswer={answer}
    >
      {pageNumber < pageCount && (
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Hebrew to English</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                {shuffledQuestions.map((vocabEntry, i) => (
                  <Button
                    key={i}
                    style={{ marginTop: 12 }}
                    disabled={isQuestionAnswered(i)}
                    primary={selectedQuestion === i}
                    onClick={() => setSelectedQuestion(i)}
                    fluid
                  >
                    {vocabEntry.word}
                  </Button>
                ))}
              </Grid.Column>
              <Grid.Column>
                {shuffledAnswers.map((vocabEntry, i) => (
                  <Button
                    key={i}
                    style={{ marginTop: 12 }}
                    disabled={isAnswered(i)}
                    primary={selectedAnswer === i}
                    onClick={() => setSelectedAnswer(i)}
                    fluid
                  >
                    {vocabEntry.definition}
                  </Button>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )}
      {pageNumber >= pageCount && <QuizCompleteDialog quizName={title} />}
    </QuizQuestion>
  );
}

VocabularyQuiz.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  maxPerPage: PropTypes.number,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
};

VocabularyQuiz.defaultProps = {
  inverted: true,
  title: "Vocabulary quiz",
  maxPerPage: 5,
};

export default VocabularyQuiz;
