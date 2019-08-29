import styled from 'styled-components';

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