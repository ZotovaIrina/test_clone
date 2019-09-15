import styled from 'styled-components';

export const ChangeLanguageContainer = styled.div`
position: relative;
display: grid;
gap: ${props => props.theme.spacing.gap};
grid-template-columns: ${props => props.theme.size.large} ${props => props.theme.size.large};
`;
