import { getProgressForQuizSet, getQuizStatuses, chooseNextQuiz } from ".";
import { LocalStorageMock } from "../Persistence/index.test";
import { setQuizStatus } from "../Persistence";

let quizSet = {
  title: "Test quizzes",
  chapter: 22,
  quizzes: [
    {
      path: "a",
      render: <div>A</div>,
    },
    {
      path: "b",
      render: <div>B</div>,
    },
  ],
};

/*
test("getProgressForQuizSet returns a status of zero", () => {
  const storageMock = new LocalStorageMock();

  expect(setQuizStatus("b", true, 1, storageMock)).toBe(true);
  expect(getProgressForQuizSet(quizSet, storageMock)).toBe(0.5);
});

test("getQuizStatuses returns the statuses of the quizzes", () => {
  const storageMock = new LocalStorageMock();

  expect(setQuizStatus("b", true, 1, storageMock)).toBe(true);

  let statuses = getQuizStatuses(quizSet, storageMock);

  expect(statuses.length).toBe(2);
  expect(statuses[1]).not.toBe(null);
});
*/
test("chooseNextQuiz returns the next quiz that must be done when some are done", () => {
    const storageMock = new LocalStorageMock();
  
    expect(setQuizStatus(quizSet.quizzes[0].path, true, 1, storageMock)).toBe(true);

    let nextQuiz = chooseNextQuiz(quizSet, storageMock);
    expect(nextQuiz).not.toBe(null);
    expect(nextQuiz.path).toBe("b");
  });

  test("chooseNextQuiz returns the last quiz when all are done", () => {
    const storageMock = new LocalStorageMock();
  
    expect(setQuizStatus(quizSet.quizzes[0].path, true, 1, storageMock)).toBe(true);
    expect(setQuizStatus(quizSet.quizzes[1].path, true, 1, storageMock)).toBe(true);

    let nextQuiz = chooseNextQuiz(quizSet, storageMock);
    expect(nextQuiz).not.toBe(null);
    expect(nextQuiz.path).toBe("b");
  });
