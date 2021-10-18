import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Label, Divider } from "semantic-ui-react";
import QuizContainer from "../../QuizContainer";
import QuizQuestion from "../../QuizQuestion";
import { shuffle } from "../../Utils/index";
import { UNANSWERED, CORRECT, INCORRECT } from "../../QuizQuestion/constants";

function MakeSentenceQuestion({
  inverted,
  title,
  subtitle,
  percent,
  onClose,
  sentence,
  onAnswered,
  answer,
}) {
  // Track the words that the user has selected
  const [chosenIndexes, setChosenIndexes] = useState([]);
  const [correctIndexes, setCorrectIndexes] = useState([]);
  const [answerWordList, setAnswerWordList] = useState(null);

  const [answerStatus, setAnswerStatus] = useState(UNANSWERED);

  /** 
   * Determine if the word is in the list that the user chose
   */
  function isChosen(index) {
    return chosenIndexes.includes(index);
  }

  let answerWordLabelList = null;

  /**
   * Make the list of words to include in the list of options
   */
  if(answerWordList) {
    answerWordLabelList = answerWordList.map((word, index) => {
      if (!isChosen(index)) {
        return (
          <Label
            onClick={() => {
              setChosenIndexes(chosenIndexes.concat([index]));
            }}
            key={index}
          >
            {word}
          </Label>
        );
      }

      return null;
    });
  }

  /**
   * Construct the shuffled words list
   */
  useEffect(() => {
    // Break up the answer into a list
    const answerWords = answer ? answer.split(" ") : [];

    const answerWordsShuffled = shuffle(answerWords);
    setAnswerWordList(answerWordsShuffled);
  }, [answer]);

  /**
   * Make the currently selected list
   */
  const constructedAnswer = chosenIndexes.map((index) => {
    // Get the word for the index
    const wordForIndex = answerWordList[index];

    return (
      <Label
        onClick={() =>
          setChosenIndexes(chosenIndexes.filter((value) => {
              return value !== index;
            }))
        }
        key={index}
      >
        {wordForIndex}
      </Label>
    );
  }).reverse();

  /**
   * Handle the user pressing "submit"
   */
  const submitAnswer = () => {
    // We have confirmed the answer status and now need to move to the next question
    if(answerStatus === CORRECT || answerStatus === INCORRECT) {
      // We have confirmed the answer status and now need to move to the next question
      setChosenIndexes([]);
      setAnswerStatus(UNANSWERED);
    }

    // If the answer status is correct, then the user has acknowledged the correct answer and wants to move on
    if(answerStatus === CORRECT ) {
      // Tell the caller that the question was answered and we should move to the next question
      onAnswered(true);
    }

    // If the answer status is incorrect, then the user has acknowledged the correct answer and wants to move on
    if(answerStatus === INCORRECT ) {
      // Tell the caller that the question was answered and we should move to the next question
      onAnswered(false);
    }

    // Not answered yet
    if(answerStatus === UNANSWERED && chosenIndexes.length > 0 ) {
      // Construct the answer
      const answerWords = answer ? answer.split(" ") : [];

      // Determine if the answer is correct
      let isWrong = false;

      answerWords.map((word, index) => {
        // Get the word for the index
        const wordForIndex = answerWords[index];

        // Make sure that we have enough words
        if(index >= chosenIndexes) {
          isWrong = true;
        }
        else{
          // Get the word that the user selected
          const selectedWordForIndex = answerWordList[chosenIndexes[index]];

          // Determine if this word is the same one from the expected list
          if(wordForIndex !== selectedWordForIndex){
            isWrong = true;
          }
        }
      });

      // Set the status accordingly
      if(isWrong){
        setAnswerStatus(INCORRECT);
      }
      else{
        setAnswerStatus(CORRECT);
      }
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
        correctAnswer={answer}>
        <p><strong>Construct the following sentence in Hebrew:</strong></p>
        {sentence}
        <p><div style={{height: 32}}>{constructedAnswer}</div></p>
        <Divider />
        <p><strong>From the following words</strong></p>
        <p><div style={{height: 32}}>{answerWordLabelList}</div></p>
      </QuizQuestion>
    </QuizContainer>
  );
}

MakeSentenceQuestion.propTypes = {
  inverted: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onAnswered: PropTypes.func,
  percent: PropTypes.number,
};

MakeSentenceQuestion.defaultProps = {
  inverted: false,
};

export default MakeSentenceQuestion;
