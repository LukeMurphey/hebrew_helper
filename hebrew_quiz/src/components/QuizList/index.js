import React, { useState } from "react";
import { Table, Header } from "semantic-ui-react";
import {
  Container,
  Icon,
  Button,
  Input,
  Message,
  Dropdown,
  Progress,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import QuizRegistry from "../QuizRegistry";
import QuizStatus from "./QuizStatus";
import { getQuizStatus } from "../Persistence/index";
import { getQuizIDFromURL, chooseNextQuiz, getProgressForQuizSet } from "../Utils";
import PropTypes from "prop-types";

const QUIZTYPE_ALL = null;
const QUIZTYPE_VOCAB = "vocab";
const QUIZTYPE_PARADIGM = "paradigm";

const QUIZCATEGORY_ALL = null;
const QUIZCATEGORY_NEXT = "next";
const QUIZCATEGORY_WRONG = "wrong";
const QUIZCATEGORY_RIGHT = "right";
const QUIZCATEGORY_NOT_DONE = "not_done";

/**
 * Determine if the quiz is a vocabulary quiz.
 * @param {object} quiz
 * @returns
 */
export function isVocab(quiz) {
  return quiz.title.includes("Vocabulary");
}

/**
 * Filter the quizzes by type.
 *
 * @param {array} quizzes
 * @param {string} quizType
 * @returns
 */
export function filterQuizzesByType(quizzes, quizType) {
  return quizzes.filter((quiz) => {
    // Filter by type
    if (!quizType) {
      return true;
    } else if (quizType === QUIZTYPE_VOCAB) {
      return isVocab(quiz);
    } else if (quizType === QUIZTYPE_PARADIGM) {
      return !isVocab(quiz);
    }

    return true;
  });
}

/**
 * Filter the quizzes by category.
 *
 * @param {array} quizzes
 * @param {string} quizCategory
 * @returns
 */
export function filterQuizzesByCategory(quizzes, quizCategory) {
  return quizzes.filter((quizSet) => {
    // Get the latest quiz
    const quiz = chooseNextQuiz(quizSet);

    // Filter by category
    const quizInfo = getQuizStatus(getQuizIDFromURL(quiz.path))

    if (quizCategory === QUIZCATEGORY_ALL) {
      // Pass it through.
      return true;
    }

    // Handle the case where we don't have quiz information
    if (quizInfo === null) {
      return quizCategory === QUIZCATEGORY_NOT_DONE;
    } else {
      if (quizCategory === QUIZCATEGORY_NOT_DONE) {
        return quizInfo.status === null;
      } else if (quizCategory === QUIZCATEGORY_WRONG) {
        return quizInfo.status === false;
      } else if (quizCategory === QUIZCATEGORY_RIGHT) {
        return quizInfo.status === true;
      }
    }

    // TODO add next up

    return true;
  });
}

/**
 * Search the quizzes by the search string.
 *
 * @param {array} quizzes
 * @param {string} search
 * @returns
 */
export function searchQuizzes(quizzes, search) {
  return quizzes.filter((quiz) => {
    if (!search) {
      return true;
    } else {
      let match = false;
      let searchLower = search.toLowerCase();

      Object.entries(quiz).map(([, value]) => {
        if (value.indexOf) {
          match = match || value.toLowerCase().indexOf(searchLower) >= 0;
        }
      });
      return match;
    }
  });
}

/**
 * Perform the various filters against all of the quizzes.
 *
 * @param {array} quizzes
 * @param {string} search
 * @param {string} quizType
 * @param {string} quizCategory
 * @returns
 */
export function filterQuizzes(quizzes, search, quizType, quizCategory) {
  return searchQuizzes(
    filterQuizzesByCategory(
      filterQuizzesByType(quizzes, quizType),
      quizCategory
    ),
    search
  );
}

/**
 * Below are the options for the categories.
 */
const categoryOptions = [
  {
    key: QUIZCATEGORY_ALL,
    text: "All",
    value: QUIZCATEGORY_ALL,
  },
  {
    key: QUIZCATEGORY_WRONG,
    text: "Wrong",
    value: QUIZCATEGORY_WRONG,
  },
  {
    key: QUIZCATEGORY_NOT_DONE,
    text: "Unfinished",
    value: QUIZCATEGORY_NOT_DONE,
  },
  {
    key: QUIZCATEGORY_RIGHT,
    text: "Done",
    value: QUIZCATEGORY_RIGHT,
  },
  /*
  {
    key: QUIZCATEGORY_NEXT,
    text: 'Next up',
    value: QUIZCATEGORY_NEXT,
  },
  */
];

function QuizList({ inverted }) {
  const [search, setSearch] = useState(null);
  const [quizType, setQuizType] = useState(QUIZTYPE_ALL);
  const [quizCategory, setQuizCategory] = useState(QUIZCATEGORY_ALL);

  // Filter the quizzes to the ones that we are searching for
  const filteredQuizzes = QuizRegistry({ inverted })
    ? filterQuizzes(QuizRegistry({ inverted }), search, quizType, quizCategory)
    : null;

  const quizRows = [];
  for (const [index, value] of filteredQuizzes.entries()) {
    // Get the next quiz to show
    let nextQuiz = chooseNextQuiz(value);

    // Add the rows
    quizRows.push(
      <Table.Row key={index}>
        <Table.Cell>
          <QuizStatus quizID={getQuizIDFromURL(nextQuiz.path)} /> {value.chapter}
        </Table.Cell>
        <Table.Cell>
          <Link to={nextQuiz.path}>{value.title}</Link>
          {value.quizzes.length > 1 && (
            <Progress style={{marginBottom: 0}} percent={getProgressForQuizSet(value) * 100.0} size='tiny' success></Progress>
          )}
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Container text>
      <Header as="h1" dividing>
        Quizzes
      </Header>

      <Button.Group>
        <Button
          as={Link}
          onClick={() => setQuizType(QUIZTYPE_ALL)}
          active={quizType === QUIZTYPE_ALL}
        >
          All
        </Button>
        <Button
          as={Link}
          onClick={() => setQuizType(QUIZTYPE_VOCAB)}
          active={quizType === QUIZTYPE_VOCAB}
        >
          Vocabulary
        </Button>
        <Button
          as={Link}
          onClick={() => setQuizType(QUIZTYPE_PARADIGM)}
          active={quizType === QUIZTYPE_PARADIGM}
        >
          Other
        </Button>
      </Button.Group>

      <Dropdown
        options={categoryOptions}
        onChange={(event, data) => setQuizCategory(data.value)}
        defaultValue={quizCategory}
        simple
        item
      ></Dropdown>

      <Input
        style={{ float: "right" }}
        icon
        placeholder="Search..."
        onChange={(e, d) => setSearch(d.value)}
      >
        <input />
        <Icon name="search" />
      </Input>

      {quizRows.length >= 0 && (
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Chapter</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{quizRows}</Table.Body>
        </Table>
      )}
      {quizRows.length === 0 && (
        <Message
          warning
          header="No Matches"
          content="No quizzes match your search."
        />
      )}
    </Container>
  );
}

QuizList.propTypes = {
  inverted: PropTypes.bool,
};

QuizList.defaultProps = {
  inverted: true,
};

export default QuizList;
