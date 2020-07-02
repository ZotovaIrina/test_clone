import styled from 'styled-components';
import {ICheckbox} from './Checkbox';

export const CheckboxLabel = styled.label<ICheckbox>`
display: block;
height: ${props => props.theme.spacing.gap};
width: ${props => props.theme.spacing.gap};
border: 1px solid ${props => props.theme.colors.superDarkPrimary};
border-radius: 2px;
background-color: ${props => props.inputValue ? props.theme.colors.lightPrimary : 'transparent'};

`;

export const CheckboxStyled = styled.input`


&:after {
content: "${props => props.value ? '\\2713' : ''}";
font-size: ${props => props.theme.spacing.gap};
line-height: ${props => props.theme.spacing.gap};
font-family: 'BoldFont', sans-serif;
color: ${props => props.theme.colors.superDarkPrimary};
display: block;
height: ${props => props.theme.spacing.gap};
width: ${props => props.theme.spacing.gap};
border: 1px solid ${props => props.theme.colors.superDarkPrimary};
border-radius: 2px;
background-color: ${props => props.value ? props.theme.colors.lightPrimary : 'white'};
}
`;
