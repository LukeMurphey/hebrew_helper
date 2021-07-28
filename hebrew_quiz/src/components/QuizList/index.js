// import './QuizList.css';
import { Table, Header } from 'semantic-ui-react';
import {URL_PRONOMINAL, URL_QAL_PERFECT} from '../URLs/index';
import { Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function QuizList() {
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
                <Table.Row>
                    <Table.Cell>B</Table.Cell>
                    <Table.Cell>Pronominal</Table.Cell>
                    <Table.Cell><Link to={URL_PRONOMINAL}>Start</Link></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>B</Table.Cell>
                    <Table.Cell>Qal Perfect</Table.Cell>
                    <Table.Cell><Link to={URL_QAL_PERFECT}>Start</Link></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Container>
  );
}

export default QuizList;
