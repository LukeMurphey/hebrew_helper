import { getProgressForQuizSet, getQuizStatuses } from ".";
import { LocalStorageMock } from "../Persistence/index.test";
import { setQuizStatus } from "../Persistence";

let quizzes = {
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

test("getProgressForQuizSet returns a status of zero", () => {
  const storageMock = new LocalStorageMock();

  expect(setQuizStatus("b", true, 1, storageMock)).toBe(true);
  expect(getProgressForQuizSet(quizzes, storageMock)).toBe(0.5);
});

test("getQuizStatuses returns the statuses of the quizzes", () => {
  const storageMock = new LocalStorageMock();

  expect(setQuizStatus("b", true, 1, storageMock)).toBe(true);

  let statuses = getQuizStatuses(quizzes, storageMock);

  expect(statuses.length).toBe(2);
  expect(statuses[1]).not.toBe(null);
});
