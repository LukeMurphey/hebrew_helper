import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import {
  PERSON_FIRST,
  PERSON_SECOND,
  PERSON_THIRD,
  getPersonText,
  GENDER_MASC,
  GENDER_FEM,
  GENDER_COM,
  GENDER_NEUT,
  getGenderText,
  NUMBER_SINGULAR,
  NUMBER_DUAL,
  NUMBER_PLURAL,
  getNumberText,
} from "../Hebrew/index";

function ParsingAnswer({ inverted, onChange }) {
  const [person, setPerson] = useState(null);
  const [gender, setGender] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    if (person && gender && number) {
      onChange(`${person}${gender}${number}`);
    } else {
      onChange(null);
    }
  }, [person, gender, number, onChange]);

  return (
    <>
      <Dropdown selection text={getPersonText(person)} style={{marginRight: 16}} >
        <Dropdown.Menu>
          <Dropdown.Item
            active={person === PERSON_FIRST}
            text="First"
            onClick={() => {
              setPerson(PERSON_FIRST);
            }}
          />
          <Dropdown.Item
            active={person === PERSON_SECOND}
            text="Second"
            onClick={() => {
              setPerson(PERSON_SECOND);
            }}
          />
          <Dropdown.Item
            active={person === PERSON_THIRD}
            text="Third"
            onClick={() => {
              setPerson(PERSON_THIRD);
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown selection text={getGenderText(gender)} style={{marginRight: 16}}>
        <Dropdown.Menu>
          <Dropdown.Item
            active={gender === GENDER_MASC}
            text="Masculine"
            onClick={() => {
              setGender(GENDER_MASC);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_FEM}
            text="Feminine"
            onClick={() => {
              setGender(GENDER_FEM);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_COM}
            text="Common"
            onClick={() => {
              setGender(GENDER_COM);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_NEUT}
            text="Neuter"
            onClick={() => {
              setGender(GENDER_NEUT);
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown selection text={getNumberText(number)}>
        <Dropdown.Menu>
          <Dropdown.Item
            active={number === NUMBER_SINGULAR}
            text="Singular"
            onClick={() => {
              setNumber(NUMBER_SINGULAR);
            }}
          />
          <Dropdown.Item
            active={number === NUMBER_DUAL}
            text="Dual"
            onClick={() => {
              setNumber(NUMBER_DUAL);
            }}
          />
          <Dropdown.Item
            active={number === NUMBER_PLURAL}
            text="Plural"
            onClick={() => {
              setNumber(NUMBER_PLURAL);
            }}
          />
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
