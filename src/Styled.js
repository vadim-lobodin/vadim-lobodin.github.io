import styled, {css} from 'styled-components';

//Utilities

export const colors = {
    arrivalBlue1000: '#0C62F3',
    white: '#FFFFFF',
    gray020: '#F9F9F90',
    gray040: '#F2F3F5',
    gray050: '#EBEDF0',
    gray100: '#E1E3E6',
    gray150: '#DADCE0',
    gray200: '#C4C8CC',
    gray300: '#AAAEB3',
    gray400: '#909499',
    gray450: '#7F8285',
    gray500: '#76787A',
    gray600: '#5D5F61',
    gray700: '#454647',
    gray800: '#2C2D2E',
    gray850: '#232324',
    gray900: '#1E1F22',
    black: '#0F1011'
}

export const space = [
    0,
    4,
    8,
    12,
    16,
    20,
    24,
    28,
    32,
    40,
    44
];

const isDarkBackground = function(color) {
if (color) {
    if (color.includes("black") || color.includes("gray700") || color.includes("gray600")) {
    return true;
    } else {
        return false;
    }
    }
}

export const Btn = styled.button`
    outline: none;
    margin-right: ${space[4]}px;
    border: none;
    border-radius: none;
    transition: 0.2s all ease;
    background-color: ${props => props.color ? colors[props.color] : colors.black};
    color: ${props => isDarkBackground(props.color) ? colors.white : colors.black};
    font-size: 16px;
    padding: ${space[4]}px ${space[6]}px;

${props => props.size ==="sm" && css` 
    font-size: 14px;
    padding: ${space[3]}px ${space[3]}px;
`}

${props => props.size ==="lg" && css` 
    font-size: 18px;
    padding: ${space[5]}px ${space[7]}px;
`}

&:hover {
    cursor: pointer;
    background-color: ${props=> isDarkBackground(props.color) ? colors.gray800 : colors.gray100};
}
`