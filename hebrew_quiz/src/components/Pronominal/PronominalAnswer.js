import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function PronominalAnswer({title, inverted, children}) {
    return (
        <Dropdown text='Person'>
            <Dropdown.Item text='First' />
            <Dropdown.Item text='Second' />
            <Dropdown.Item text='Third' />
        </Dropdown>
    );
  }

PronominalAnswer.propTypes = {
    inverted: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

PronominalAnswer.defaultProps = {
    inverted: false,
};

export default PronominalAnswer;
  