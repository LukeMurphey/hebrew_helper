import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import QuizContainer from "../../QuizContainer";
import QuizQuestion from "../../QuizQuestion";
import { shuffle } from "../../Utils/index";
import { UNANSWERED, CORRECT, INCORRECT } from "../../QuizQuestion/constants";

function MultipleChoiceQuestion({
  inverted,
  title,
  subtitle,
  percent,
  onClose,
  sentence,
  onAnswered,
  fluid,
  answer,
  answers,
  question,
}) {
  const [answerStatus, setAnswerStatus] = useState(UNANSWERED);
  const [answersList, setAnswersList] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  /**
   * Construct the shuffled words list
   */
  useEffect(() => {
    // Shuffle the possible wrong answers
    const answersShuffled = shuffle(answers);
    setAnswersList(answersShuffled);
  }, [answers]);

  /**
   * Determines what index is the one of the correct answer. 
   * @returns boolean
   */
  const determineCorrectIndex = () => {
    return answers.indexOf(answer); 
  };

  /**
   * Handle the user pressing "submit"
   */
  const submitAnswer = () => {
    // We have confirmed the answer status and now need to move to the next question
    if (answerStatus === CORRECT || answerStatus === INCORRECT) {
      setAnswerStatus(UNANSWERED);
    }

    // The user selected nothing
    if(selectedAnswer === null) {
      return;
    }

    const correctIndex = determineCorrectIndex();

    // Set the status accordingly
    if (correctIndex === selectedAnswer) {
      setAnswerStatus(CORRECT);
      // Send up the note that the question has been answered
      onAnswered(true);
    } else {
      setAnswerStatus(INCORRECT);
      // Send up the note that the question has been answered
      onAnswered(false);
    }
  };

  return (
    <QuizContainer
      title={title}
      subtitle={subtitle}
      percent={percent}
      onClose={onClose}
    >
      <QuizQuestion
        answerStatus={answerStatus}
        onSubmit={submitAnswer}
        correctAnswer={answer}
      >
        <p>{question}</p>
        <p>{sentence}</p>
        {answers && answers.map((possibleAnswer, i) => (
                            <Button
                            key={i}
                            style={{ marginTop: 12 }}
                            primary={selectedAnswer === i}
                            onClick={() => setSelectedAnswer(i)}
                            fluid={fluid}
                          >{possibleAnswer}</Button>
        ))}
      </QuizQuestion>
    </QuizContainer>
  );
}

MultipleChoiceQuestion.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
  percent: PropTypes.number,
  fluid: PropTypes.bool,
};

MultipleChoiceQuestion.defaultProps = {
  inverted: false,
  fluid: false,
};

export default MultipleChoiceQuestion;
