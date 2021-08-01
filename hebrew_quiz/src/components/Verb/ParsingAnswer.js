import React from "react";
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

function ParsingAnswer({ inverted, onChange, person, gender, number }) {

  return (
    <>
      <Dropdown selection text={getPersonText(person)} style={{marginRight: 16}} >
        <Dropdown.Menu>
          <Dropdown.Item
            active={person === PERSON_FIRST}
            text="First"
            onClick={() => {
              onChange(PERSON_FIRST, gender, number);
            }}
          />
          <Dropdown.Item
            active={person === PERSON_SECOND}
            text="Second"
            onClick={() => {
              onChange(PERSON_SECOND, gender, number);
            }}
          />
          <Dropdown.Item
            active={person === PERSON_THIRD}
            text="Third"
            onClick={() => {
              onChange(PERSON_THIRD, gender, number);
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
              onChange(person, GENDER_MASC, number);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_FEM}
            text="Feminine"
            onClick={() => {
              onChange(person, GENDER_FEM, number);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_COM}
            text="Common"
            onClick={() => {
              onChange(person, GENDER_COM, number);
            }}
          />
          <Dropdown.Item
            active={gender === GENDER_NEUT}
            text="Neuter"
            onClick={() => {
              onChange(person, GENDER_NEUT, number);
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
              onChange(person, gender, NUMBER_SINGULAR);
            }}
          />
          <Dropdown.Item
            active={number === NUMBER_DUAL}
            text="Dual"
            onClick={() => {
              onChange(person, gender, NUMBER_DUAL);
            }}
          />
          <Dropdown.Item
            active={number === NUMBER_PLURAL}
            text="Plural"
            onClick={() => {
              onChange(person, gender, NUMBER_PLURAL);
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
  person: PropTypes.oneOf([PERSON_FIRST, PERSON_SECOND, PERSON_THIRD, null]),
  gender: PropTypes.oneOf([GENDER_MASC, GENDER_FEM, GENDER_COM, GENDER_NEUT, null]),
  number: PropTypes.oneOf([NUMBER_SINGULAR, NUMBER_PLURAL, NUMBER_DUAL, null]),
};

ParsingAnswer.defaultProps = {
  inverted: false,
  person: null,
  gender: null,
  number: null,
};

export default ParsingAnswer;
