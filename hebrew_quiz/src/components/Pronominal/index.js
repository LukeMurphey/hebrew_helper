import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';
import QuizQuestion from '../QuizQuestion';
import PronominalAnswer from './PronominalAnswer';

function Pronominal({title, inverted}) {
    return (
        <Segment inverted={inverted}>
            <Header as="h3">{title}</Header>
            <QuizQuestion title={""}>
              <PronominalAnswer />
            </QuizQuestion>
        </Segment>
    );
  }

Pronominal.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
};

Pronominal.defaultProps = {
  inverted: false,
  title: "Pronominal",
};

export default Pronominal;
  