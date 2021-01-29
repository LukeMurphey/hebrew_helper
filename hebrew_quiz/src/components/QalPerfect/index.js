import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';
import VerbParsingQuestion from '../Verb/VerbParsingQuestion';

function QalPerfect({title, inverted}) {
    return (
        <Segment inverted={inverted}>
            <Header as="h3">{title}</Header>
            <VerbParsingQuestion title={"Parse this verb"} question={"קָטַל"} answer={"3ms"}/>
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
  