import styled from 'styled-components';
import {Card} from '../../common/Card/Card.styled';
import GridRow from '../../common/GridRow/GridRow';

export const ProjectContainerStyled = styled(Card)`
position:relative;
width: 100%;
padding-top: 100%;
`;

export const ProjectImageStyled = styled.div`
position: absolute;
top:0;
right: 0;
height:100%;

img {
  width: 100%;
}

&:hover {
opacity: 0;
transition: opacity 0.5s;
}
`;

export const ProjectDescriptionStyled = styled(GridRow)`
position: absolute;
top:0;
right: 0;
left:0;
bottom: 0;
overflow: hidden;
margin: ${props => props.theme.spacing.gap};
align-content: baseline;
`;