// import './QuizList.css';
import { Table, Button } from 'semantic-ui-react';

function QuizList() {
  return (
      <>
    <Table basic="very" celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Pronominal</Table.Cell>
                <Table.Cell>Description <Button/>Start Quiz</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
    </>
  );
}

export default QuizList;
