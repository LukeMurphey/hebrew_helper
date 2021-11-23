const QUIZ_STATUSES_NAME = "quizStatuses";

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function getQuizStatus(quizID, storageOverride = null) {
  const quizStatuses = getQuizStatuses(storageOverride);

  if (quizStatuses !== null && quizID in quizStatuses) {
    return quizStatuses[quizID];
  }

  return null;
}

export function getQuizStatuses(storageOverride = null) {
  const storage = storageOverride || localStorage;

  // if (storageAvailable("localStorage")) {
  const quizStatuses = storage.getItem(QUIZ_STATUSES_NAME);

  if (quizStatuses) {
    try {
      const quizStatusesParsed = JSON.parse(quizStatuses);

      return quizStatusesParsed;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("The list of quiz statuses could not be loaded");
      return null; // The list could not be loaded
    }
  }

  return null;
}

export function setQuizStatuses(quizStatuses, storageOverride = null) {
  const storage = storageOverride || localStorage;

  storage.setItem(QUIZ_STATUSES_NAME, JSON.stringify(quizStatuses));
}

export function setQuizStatus(quizID, status, level = 1, storageOverride = null) {
  const storage = storageOverride || localStorage;

  // if (storageAvailable("localStorage")) {
  let quizStatuses = getQuizStatuses(storage);

  // If it doesn't exist yet, then initialize it
  if (!quizStatuses) {
    quizStatuses = {};
  }

  // Set the quiz status
  quizStatuses[quizID] = {
    status,
    dateUpdated: Date.now(),
    level: level,
  };

  // Save it
  setQuizStatuses(quizStatuses, storageOverride);

  // Return true noting that we were able to save it
  return true;
}
