import styled from 'styled-components';

export const ProjectPageStyled = styled.div`
position: relative;
margin: ${props => props.theme.spacing.gap};
`;

export const ProjectsRowStyled = styled.div`
position: relative;
display: block;
width: 100%;

& > * {
    display: inline-block;
    padding-left: 16px;
    box-sizing: border-box;
  }
      
  & > *:first-child {
   padding: 0;
  }
`;

export const ProjectsPanel = styled.div`
dis
`;