import styled from 'styled-components';

export const ChangeLanguageContainer = styled.div`
position: relative;
display: grid;
gap: ${props => props.theme.spacing.gap};
grid-template-columns: min-content min-content;
`;
