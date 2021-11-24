import QuizRegistry from "./index";

const checkQuiz = (quizSet) => {
    for (const [index, quiz] of quizSet.quizzes.entries()) {
      if(quiz.path === undefined || quiz.render === undefined) {
        return false;
      }
    }
    // Everything checks out
    return true;
  };

const checkMultiStageQuizzes = (questionSet) => {
  const errors = questionSet.filter((question, i) => {
    if (!checkQuiz(question)) {
      console.error(
        `Quiz ${i} is not well-formed`
      );
      return true;
    }
    return false;
  });

  return errors.length;
};

test("tests with multiple stages are well-formed", () => {

  const badExams = checkMultiStageQuizzes(QuizRegistry(false));
  expect(badExams).toBe(0);
});
