import styled from 'styled-components';
import {H1} from '../common/Text/Text.styled';

export const HomePageContentContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
text-align: center;
display: flex;
justify-content: space-between;
flex-direction: column;
z-index: 2;
`;

export const TitleTextStyled = styled(H1)`
color: white;
margin: ${props => props.theme.spacing.gap};
`;

export const BackgroundStar = styled.div`
width: 40px;
height: 40px;
background-color: white;

`;