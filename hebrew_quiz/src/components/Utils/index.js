
import { getQuizStatus } from '../Persistence';

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
  return path.substring(1,);
}
/**
 * Get the quiz status for each quiz. This returns null if no status is available.
 *
 * @param {object} quizSet 
 * @param {*} storageMock 
 * @returns 
 */
export function getQuizStatuses(quizSet, storageMock = null) {
  return quizSet.quizzes.map((quiz) => getQuizStatus(quiz.path, storageMock))
}

/**
 * Get the statuses
 * @param {*} quizSet 
 * @param {*} storageMock 
 */
export function getProgressForQuizSet(quizSet, storageMock = null) {

  // Get the statuses
  let statuses = getQuizStatuses(quizSet, storageMock);

  // Count the number that are done
  let done = statuses.filter(status => {
    if(status && status.status ){
      return true;
    }
    else {
      return false;
    }
  });

  // Calculate the number that are done
  return done.length / statuses.length;
}
