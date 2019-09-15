import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavigationBarStyled = styled.div<{}>`
display: flex;
z-index: 100;
 & > * {
   margin: ${props => props.theme.spacing.gap};
}

`;

export const NavigationBarContainer= styled.div<{}>`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${props => props.theme.colors.primary};
`;

export const NavigationBarItem = styled(NavLink)`
color: white;
text-decoration: none;
font-family: 'BoldFont', sans-serif;
&.active {
    color: ${props => props.theme.colors.secondary};
  }
`;