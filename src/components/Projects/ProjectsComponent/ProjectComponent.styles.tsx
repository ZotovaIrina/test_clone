import styled from 'styled-components';

export const ProjectContainerStyled = styled.div`
position:relative;
padding: 16px;
`;

export const ProjectImageStyled = styled.div`
position: absolute;
top:0;
right: 0;
img {
  width: 100%;
}

&:hover {
opacity: 0;
transition: opacity 0.5s;
}
`;

export const ProjectDescriptionStyled = styled.div`
position: absolute;
top:0;
right: 0;
`;