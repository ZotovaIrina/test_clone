import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavigationBarStyled = styled.div<{}>`
width: 100%;
background-color: ${props => props.theme.colors.darkPrimary};
display: flex;
z-index: 100;

 & > * {
   margin: ${props => props.theme.spacing.gap};
}

`;

export const NavigationBarItem = styled(NavLink)`
color: white;
text-decoration: none;
font-family: 'BoldFont', sans-serif;
&.active {
    color: ${props => props.theme.colors.secondary};
  }
`;