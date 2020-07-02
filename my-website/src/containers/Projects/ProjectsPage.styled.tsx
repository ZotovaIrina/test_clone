import styled from 'styled-components';

export const ProjectPageStyled = styled.div`
display: grid;
position: relative;
margin: ${props => props.theme.spacing.gap};
gap: ${props => `${props.theme.spacing.gapValue * 2}${props.theme.spacing.gapUnit}`};
`;

export const ProjectsRowStyled = styled.div`
position: relative;
display: block;
width: 100%;
max-width: ${props => props.theme.spacing.maxWidth};
margin: auto;

& > * {
    display: inline-block;
    padding: 0 ${props => props.theme.spacing.gapValue / 2}${props => props.theme.spacing.gapUnit};
    border: none;
    box-sizing: border-box;
  }
`;