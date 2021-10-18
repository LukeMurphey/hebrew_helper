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
 import SelectCorrectTranslationQuestion from "../../components/Questions/SelectCorrectTranslationQuestion";
 import { URL_QUIZZES } from "../../components/URLs/index";
 import { withRouter } from "react-router-dom";
 import QuizCompleteDialog from "../../components/QuizCompleteDialog/index";
 
 function SelectCorrectTranslationQuiz({ subtitle, inverted, history, title, questionSet, allowMultiplePerson, onQuizDone }) {
   const [questionNumber, setQuestionNumber] = useState(0);
   const [incorrectAnswers, setIncorrectAnswers] = useState(0);
 
   let question = null;
 
   // If the question is within the list, then get it
   // Otherwise, if it after the end then we have completed the quiz
   if (questionNumber < questionSet.length) {
     question = questionSet[questionNumber];
   }
 
   // If we are done, then report the quiz status
   if(!question) {
     onQuizDone(incorrectAnswers === 0);
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
         <SelectCorrectTranslationQuestion
           title={title}
           subtitle={subtitle}
           sentence={question["sentence"]}
           answer={question["correct_answer"]}
           answers={question["answers"]}
           percent={100 * (questionNumber / questionSet.length)}
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
 
 SelectCorrectTranslationQuiz.propTypes = {
   title: PropTypes.string.isRequired,
   inverted: PropTypes.bool,
   history: PropTypes.object.isRequired,
   questionSet: PropTypes.arrayOf(PropTypes.node).isRequired,
   onQuizDone: PropTypes.func,
 };
 
 SelectCorrectTranslationQuiz.defaultProps = {
   inverted: false,
   onQuizDone: () => {},
 };
 
 export default withRouter(SelectCorrectTranslationQuiz);
 