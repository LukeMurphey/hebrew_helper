// import './QuizList.css';
import { Table, Header } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { QuizUrls } from "./QuizUrls";
import PropTypes from 'prop-types';

function QuizList( { inverted }) {
  const quizRows = [];
  for (const [index, value] of QuizUrls({ inverted }).entries()) {
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
        Learning Biblical Hebrew
      </Header>
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
