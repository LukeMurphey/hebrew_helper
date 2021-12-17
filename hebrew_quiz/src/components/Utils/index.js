import { getQuizStatus } from "../Persistence";

export function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function vocabularyQuizTitle(chapter) {
  return `Chapter ${chapter} Vocabulary`;
}

export function getQuizIDFromURL(path) {
  if(path.startsWith("/")) {
    return path.substring(1);
  }

  return path;
}
/**
 * Get the quiz status for each quiz. This returns null if no status is available.
 *
 * @param {object} quizSet
 * @param {*} storageMock
 * @returns
 */
export function getQuizSetStatuses(quizSet, storageMock = null) {
  return quizSet.quizzes.map((quiz) => getQuizStatus(getQuizIDFromURL(quiz.path), storageMock));
}

/**
 * Get the statuses
 * @param {*} quizSet
 * @param {*} storageMock
 */
export function getProgressForQuizSet(quizSet, storageMock = null) {
  // Get the statuses
  let statuses = getQuizSetStatuses(quizSet, storageMock);

  // Count the number that are done
  let done = statuses.filter((status) => {
    if (status && status.status) {
      return true;
    } else {
      return false;
    }
  });

  // Calculate the number that are done
  return (1.0 * done.length) / statuses.length;
}

/**
 * Return the first quiz that needs to be done.
 * @param {*} quizSet
 * @param {*} storageMock
 */
export function chooseNextQuiz(quizSet, storageMock = null) {
  // Stop if the quiz set doesn't appear to be valid
  if (!quizSet.quizzes) {
    return null;
  }

  // Just return the first quiz if there is only one
  if (quizSet.quizzes.length === 1) {
    return quizSet.quizzes[0];
  }

  // Find the first quiz that is not done
  let foundQuiz = quizSet.quizzes.find((quiz) => {
    // Get the status of the quiz
    let status = getQuizStatus(getQuizIDFromURL(quiz.path), storageMock);

    // If the quiz is not done, then return it as the next one to do
    if (!status || status.status !== true) {
      return true;
    } else {
      return false;
    }
  });

  // If we found no quizzes that need to be done, then return the final one
  if (!foundQuiz) {
    return quizSet.quizzes[quizSet.quizzes.length - 1];
  }
  // Otherwise, return the first matching quiz
  return foundQuiz;
}
