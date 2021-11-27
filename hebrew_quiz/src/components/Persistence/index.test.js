import { getQuizStatuses, setQuizStatus, getQuizStatus } from "./index";

// Setup a local storage mock
export class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

test("setting quiz status", () => {
  const storageMock = new LocalStorageMock();

  // Add quiz statuses
  setQuizStatus("vocab_1", true, 1, storageMock);
  setQuizStatus("vocab_2", false, 1, storageMock);

  // Make sure the latest entry is correct
  const records = getQuizStatuses(storageMock);
  expect(records["vocab_1"].status).toBe(true);
  expect(records["vocab_1"].dateUpdated).toBeGreaterThan(1630429000000);

  expect(records["vocab_2"].status).toEqual(false);
  expect(records["vocab_2"].dateUpdated).toBeGreaterThan(1630429000000);

  // Getting quiz status
  const vocab_1 = getQuizStatus("vocab_1", storageMock);
  expect(vocab_1.status).toBe(true);
  expect(vocab_1.dateUpdated).toBeGreaterThan(1630429000000);

  const vocab_2 = getQuizStatus("vocab_2", storageMock);
  expect(vocab_2.status).toBe(false);
  expect(vocab_2.dateUpdated).toBeGreaterThan(1630429000000);
});

test("get quiz status", () => {
  const storageMock = new LocalStorageMock();

  // Add quiz statuses
  setQuizStatus("vocab_1", true, 1, storageMock);
  setQuizStatus("vocab_2", false, 1, storageMock);

  // Make sure the latest entry is correct
  const records = getQuizStatuses(storageMock);
  expect(records["vocab_1"].status).toBe(true);
  expect(records["vocab_1"].dateUpdated).toBeGreaterThan(1630429000000);

  expect(records["vocab_2"].status).toEqual(false);
  expect(records["vocab_2"].dateUpdated).toBeGreaterThan(1630429000000);
});
