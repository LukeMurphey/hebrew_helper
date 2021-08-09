/**
 * This component provides a way to provide a matching quiz of words to definitions.
 */
import React, { useState, useEffect } from "react";
import { Grid, Divider, Segment, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { UNANSWERED, CORRECT } from "../QuizQuestion/constants";
import QuizContainer from "../QuizContainer";
import QuizQuestion from "../QuizQuestion";
import { shuffle } from "../Utils/index";

// TODOs:
// fix warnings

function MatchingQuestion({
  inverted,
  title,
  questionSet,
  subtitle,
  percent,
  onClose,
  onAnswered,
}) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [answerStatus, setAnswerStatus] = useState(UNANSWERED);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [completedAnswers, setCompletedAnswers] = useState([]);

  // Shuffle both sets so that we can make sure the left and the right doesn't match
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  function isQuestionAnswered(i) {
    return completedQuestions.includes(i);
  }

  function isAnswered(i) {
    return completedAnswers.includes(i);
  }

  function getIndexOfAnswers(i) {
    // Get the question for the index
    const question = shuffledQuestions[i];

    // Get the indexes
    const answersIndexes = shuffledAnswers.reduce((a, e, i) => {
      if (e.definition === question.definition)
          a.push(i);
      return a;
    }, []);
    
    return answersIndexes;
  }

  // Handle selection of answers
  useEffect(() => {
    // Evaluate the result if both an answer and question have been selected
    if (selectedQuestion !== null && selectedAnswer !== null) {
      // Determine what the correct answer is
      const correctAnswerIndexes = getIndexOfAnswers(selectedQuestion);

      // If correct, then update the UI accordingly
      if (correctAnswerIndexes.includes(selectedAnswer)) {
        // Add to the correct list
        setCompletedQuestions(completedQuestions.concat([selectedQuestion]));
        setCompletedAnswers(completedAnswers.concat([selectedAnswer]));

        // Unselect the existing entries
        setSelectedQuestion(null);
        setSelectedAnswer(null);
      }
    }
  }, [selectedQuestion, selectedAnswer]);

  // Prepare the questions and answers
  useEffect(() => {
    
    if (questionSet !== null) {
      // Shuffle the questions and the answers so they don't match in an obvious way
      setShuffledQuestions(shuffle([...questionSet]));
      setShuffledAnswers(shuffle([...questionSet]));

      setCompletedQuestions([]);
      setCompletedAnswers([]);
    }
  }, [questionSet]);

  // Handle the case where the user is done matching everything
  useEffect(() => {
    // If there are no more entries, then signal that we are done
    if(completedAnswers !== null && questionSet !== null && completedAnswers.length >= questionSet.length){
      // Send up the note that the question has been answered
      onAnswered(CORRECT);
    }
  }, [completedAnswers]);

  console.log("rendering MatchingQuestion", questionSet)

  return (
    <QuizContainer
      title={title}
      subtitle={subtitle}
      percent={percent}
      onClose={onClose}
    >
      <QuizQuestion
        answerStatus={answerStatus}
        // correctAnswer={answer}
      >
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Match These</Divider>

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
      </QuizQuestion>
    </QuizContainer>
  );
}

MatchingQuestion.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  maxPerPage: PropTypes.number,
  questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
  percent: PropTypes.number,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
};

MatchingQuestion.defaultProps = {
  inverted: true,
  maxPerPage: 5,
};

export default MatchingQuestion;
