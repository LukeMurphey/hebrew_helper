import React, { useState } from "react";
import { Table, Header } from 'semantic-ui-react';
import { Container, Icon, Button, Input, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import QuizRegistry from "../QuizRegistry";
import PropTypes from 'prop-types';

const QUIZTYPE_ALL = null;
const QUIZTYPE_VOCAB = "vocab";
const QUIZTYPE_PARADIGM = "paradigm";

export function isVocab(quiz) {
  return quiz.title.endsWith("Vocabulary");
}

export function filterQuizzes(quizzes, quizType) {
  return quizzes.filter((quiz) => {
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

function QuizList( { inverted }) {
  const [search, setSearch] = useState(null);
  const [quizType, setQuizType] = useState(QUIZTYPE_ALL);

  const filteredQuizzes = QuizRegistry({ inverted })
    ? searchQuizzes(filterQuizzes(QuizRegistry({ inverted }), quizType), search)
    : null;

  const quizRows = [];
  for (const [index, value] of filteredQuizzes.entries()) {
    quizRows.push(
      <Table.Row key={index}>
        <Table.Cell>{value.chapter}</Table.Cell>
        <Table.Cell>{value.title}</Table.Cell>
        <Table.Cell><Link to={value.path}>Start</Link></Table.Cell>
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
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
              {quizRows}
            </Table.Body>
        </Table>
      )}
      {quizRows.length === 0 && (
        <Message
          warning
          header='No Matches'
          content='No quizzes match your search.'
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
