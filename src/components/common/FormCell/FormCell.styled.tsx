import styled from 'styled-components';

export const FormCellStyled = styled.div`
display: grid;
`;
export const FormCellLabel = styled.div`
text-transform: uppercase;
padding-bottom: ${props => props.theme.spacing.gapValue / 4}${props => props.theme.spacing.gapUnit};
`;

export const FormCellError = styled.span`
color: ${props => props.theme.colors.secondary}
`;