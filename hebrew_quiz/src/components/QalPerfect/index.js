import React from 'react';
import PropTypes from 'prop-types';
import VerbParsingQuestion from '../Verb/VerbParsingQuestion';
function QalPerfect({title, inverted}) {
    return (
      <VerbParsingQuestion title={"Parse this verb"} question={"קָטַל"} answer={"3ms"} inverted={inverted} />
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
  