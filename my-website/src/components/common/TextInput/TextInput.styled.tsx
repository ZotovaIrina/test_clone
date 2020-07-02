import styled from 'styled-components';
import {IFormCell} from '../FormCell/FormCell';

export const TextInputStyled = styled.input<IFormCell>`
font-family: 'RegularFont', sans-serif;
font-size: 14px;
line-height: 1.5;
border: 1px solid ${props => props.errorText ? props.theme.colors.secondary : props.theme.colors.superDarkPrimary};
padding: ${props => props.theme.spacing.gapValue / 2}${props => props.theme.spacing.gapUnit};
border-radius: 2px;
&:focus {
outline:0;
border: 2px solid ${props => props.errorText ? props.theme.colors.secondary : props.theme.colors.superDarkPrimary};
}
`;