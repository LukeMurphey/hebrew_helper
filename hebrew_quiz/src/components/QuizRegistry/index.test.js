import QuizRegistry from "./index";

const checkQuiz = (question) => {
    const pathIsArray = Array.isArray(question.path);
    const renderIsArray = Array.isArray(question.render);

    // Neither are an array
    if(!pathIsArray && !renderIsArray) {
        return true;
    }

    // Path is an array. but render is not
    if(pathIsArray && !renderIsArray) {
        return false;
    }

    // Render is an array. but path is not
    if(!pathIsArray && renderIsArray) {
        return false;
    }

    // Check the lengths
    if(question.path.length !== question.render.length) {
        return false;
    }
  
    // Everything checks out
    return true;
  };

const checkMultiStageQuizzes = (questionSet) => {
  const errors = questionSet.filter((question, i) => {
    if (!checkQuiz(question)) {
      console.error(
        `Quiz ${i} is not well-formed; it has ${question.path.length} items in the path, but ${question.render.length} render functions`
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
