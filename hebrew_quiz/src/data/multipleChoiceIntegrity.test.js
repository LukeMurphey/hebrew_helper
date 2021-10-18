import chapter_5_translations from "./chapter_5_translations.json";

const multipleChoiceExams = [chapter_5_translations];

const checkQuestion = (question) => {
  const indexOfAnswer = question["answers"].indexOf(question["correct_answer"]);

  return indexOfAnswer >= 0;
};

const checkQuestionSet = (questionSet) => {
  const errors = questionSet.filter((question, i) => {
    if (!checkQuestion(question)) {
      console.error(
        `Question ${i} is missing a valid answer; ${question["correct_answer"]} does not appear in the list of valid answers for ${question["sentence"]}`
      );
      return true;
    }
    return false;
  });

  return errors.length === 0;
};

test("tests with multiple choices a selectable answer", () => {
  const badExams = multipleChoiceExams.filter((exam) => {
    return !checkQuestionSet(exam);
  });
  expect(badExams.length).toBe(0);
});
