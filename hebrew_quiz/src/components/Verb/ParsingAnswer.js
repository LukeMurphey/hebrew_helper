import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function ParsingAnswer({inverted, onChange}) {
    const [person, setPerson] = useState(null);
    const [gender, setGender] = useState(null);
    const [number, setNumber] = useState(null);

    useEffect(() => {
        if(person && gender && number) {
            onChange(`${person}${gender}${number}`);
        }
        else {
            onChange(null);
        }
    }, [person, gender, number, onChange]);

    return (
        <>
            <Dropdown text='Person'>
                <Dropdown.Menu>
                    <Dropdown.Item active={person === '1'} text='First' onClick={() => {
                        setPerson('1');
                    }} />
                    <Dropdown.Item active={person === '2'} text='Second' onClick={() => {
                        setPerson('2');
                    }} />
                    <Dropdown.Item active={person === '3'} text='Third' onClick={() => {
                        setPerson('3');
                    }} />
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='Gender'>
                <Dropdown.Menu>
                    <Dropdown.Item active={gender === 'm'} text='Masculine' onClick={() => {
                        setGender('m');
                    }} />
                    <Dropdown.Item active={gender === 'f'} text='Feminine' onClick={() => {
                        setGender('f');
                    }} />
                    <Dropdown.Item active={gender === 'c'} text='Common' onClick={() => {
                        setGender('c');
                    }} />
                    <Dropdown.Item active={gender === 'n'} text='Neuter' onClick={() => {
                        setGender('n');
                    }} />
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='Number'>
                <Dropdown.Menu>
                    <Dropdown.Item active={number === 's'} text='Singular' onClick={() => {
                        setNumber('s');
                    }} />
                    <Dropdown.Item active={number === 'd'} text='Dual' onClick={() => {
                        setNumber('d');
                    }} />
                    <Dropdown.Item active={number === 'p'} text='Plural' onClick={() => {
                        setNumber('p');
                    }} />
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
  }

ParsingAnswer.propTypes = {
    inverted: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

ParsingAnswer.defaultProps = {
    inverted: false,
};

export default ParsingAnswer;
  