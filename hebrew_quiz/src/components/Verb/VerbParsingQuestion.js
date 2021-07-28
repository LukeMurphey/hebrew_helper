import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { URL_HOME } from "../URLs/index";
import { Header, Segment } from 'semantic-ui-react';
import QuizQuestion from '../QuizQuestion';
import ParsingAnswer from '../Verb/ParsingAnswer';
import { Link } from "react-router-dom";

// https://github.com/LukeMurphey/learning_biblical_hebrew_flashcards/blob/master/qal_perfect_qatal.csv
function QalPerfect({title, inverted}) {
    const [answer, setAnswer] = useState(null);

    return (
        <Segment inverted={inverted}>
            <Header as="h3">{title}</Header>
            <Link to={URL_HOME}>Back to list</Link>
            <QuizQuestion title={"קָטַל"} onSubmit={() => console.log(answer)}>
                <ParsingAnswer inverted={inverted} onChange={(answer) => setAnswer(answer)} />
                <div>{answer}</div>
            </QuizQuestion>
        </Segment>
    );
  }

QalPerfect.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
};

QalPerfect.defaultProps = {
  inverted: false,
  title: "Qal Perfect",
};

export default QalPerfect;
  