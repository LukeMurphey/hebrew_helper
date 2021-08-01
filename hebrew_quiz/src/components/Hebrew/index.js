
/**
 * Person
 */
export const PERSON_FIRST = '1';
export const PERSON_SECOND = '2';
export const PERSON_THIRD = '3';

export const PersonMap = {
    '1': 'First',
    '2': 'Second',
    '3': 'Third',
}

export function getPersonText(value) {
    if (!value) {
        return "Person";
    }
    return `${PersonMap[value]} Person`;
};

/**
 * Gender
 */
export const GENDER_MASC = 'm';
export const GENDER_FEM = 'f';
export const GENDER_COM = 'c';
export const GENDER_NEUT = 'n';

export const GenderMap = {
    'm': 'Masculine',
    'f': 'Feminine',
    'c': 'Common',
    'n': 'Neuter',
}

export function getGenderText(value) {
    if (!value) {
        return "Gender";
    }
    return GenderMap[value];
};

/**
 * Number
 */
export const NUMBER_SINGULAR = 's';
export const NUMBER_DUAL = 'd';
export const NUMBER_PLURAL = 'p';

export const NumberMap = {
    's': 'Singular',
    'd': 'Dual',
    'p': 'Plural',
}

export function getNumberText(value) {
    if (!value) {
        return "Number";
    }
    return NumberMap[value];
};
