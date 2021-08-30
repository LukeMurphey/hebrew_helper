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

const genderOptions = [
  { key: PERSON_FIRST, text: getPersonText(PERSON_FIRST), value: PERSON_FIRST },
  {
    key: PERSON_SECOND,
    text: getPersonText(PERSON_SECOND),
    value: PERSON_SECOND,
  },
  { key: PERSON_THIRD, text: getPersonText(PERSON_THIRD), value: PERSON_THIRD },
];

function ParsingAnswer({
  inverted,
  onChange,
  person,
  gender,
  number,
  disabled,
  allowMultiplePerson,
}) {
  return (
    <div style={{ height: 32, display: "flex", flexDirection: "row" }}>
      {allowMultiplePerson === true && (
        <Dropdown
          disabled={disabled}
          multiple
          selection
          options={genderOptions}
          style={{ marginRight: 16 }}
          onChange={(e, d) => {
            onChange(d.value, gender, number);
          }}
          value={person}
        />
      )}
      {allowMultiplePerson === false && (
        <Dropdown
          disabled={disabled}
          multiple
          selection
          text={getPersonText(person)}
          style={{ marginRight: 16 }}
        >
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
      )}
      <div style={{ width: 200 }}>
        <Dropdown
          disabled={disabled}
          selection
          text={getGenderText(gender)}
          style={{ marginRight: 16 }}
        >
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
      </div>
      <div style={{ width: 200 }}>
        <Dropdown disabled={disabled} selection text={getNumberText(number)}>
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
      </div>
    </div>
  );
}

ParsingAnswer.propTypes = {
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  allowMultiplePerson: PropTypes.bool,
  person: PropTypes.oneOf([PERSON_FIRST, PERSON_SECOND, PERSON_THIRD, null]),
  gender: PropTypes.oneOf([
    GENDER_MASC,
    GENDER_FEM,
    GENDER_COM,
    GENDER_NEUT,
    null,
  ]),
  number: PropTypes.oneOf([NUMBER_SINGULAR, NUMBER_PLURAL, NUMBER_DUAL, null]),
};

ParsingAnswer.defaultProps = {
  inverted: false,
  disabled: false,
  person: null,
  gender: null,
  number: null,
  allowMultiplePerson: false,
};

export default ParsingAnswer;
