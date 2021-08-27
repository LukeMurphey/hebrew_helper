import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Label, Divider } from "semantic-ui-react";
import QuizContainer from "../QuizContainer";
import QuizQuestion from "../QuizQuestion";
import { shuffle } from "../Utils/index";

function MakeSentenceQuestion({
  inverted,
  title,
  subtitle,
  percent,
  answerStatus,
  onClose,
  sentence,
  answer,
}) {
  // Break up the answer into a list
  const answerWords = answer ? answer.split(" ") : [];

    // Track the words that the user has selected
  const [chosenIndexes, setChosenIndexes] = useState([]);
  const [answerWordList, setAnswerWordList] = useState(null);

  // Determine if the word is in the list that the user chose
  function isChosen(index) {
    return chosenIndexes.includes(index);
  }

  let answerWordLabelList = null;

  // Make the list of words to include in the list of options
  if(answerWordList) {
    answerWordLabelList = answerWordList.map((word, index) => {
      if (!isChosen(index)) {
        return (
          <Label
            onClick={() => {
              setChosenIndexes(chosenIndexes.concat([index]));
              console.info(`Adding ${index}`);
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

  useEffect(() => {
    if(answerWordList === null){
      const answerWordsShuffled = shuffle(answerWords);
      setAnswerWordList(answerWordsShuffled);
    }
  });

  // Make the currently selected list
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

  return (
    <QuizContainer
      title={title}
      subtitle={subtitle}
      percent={percent}
      onClose={onClose}
    >
      <QuizQuestion answerStatus={answerStatus}>
        <p><strong>Construct the following sentence in Hebrew:</strong></p>
        {sentence}
        <p>{constructedAnswer}</p>
        <Divider />
        <p><strong>From the following words</strong></p>
        <p>{answerWordLabelList}</p>
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
