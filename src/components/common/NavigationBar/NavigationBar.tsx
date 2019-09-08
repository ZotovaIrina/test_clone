import React from 'react';
import {NavigationBarItem, NavigationBarStyled} from './NavigationBar.styled';

const NavigationBar: React.FunctionComponent<{}> = props => {
  return(
    <NavigationBarStyled>
      <NavigationBarItem exact={true}  to={'/'}>Home</NavigationBarItem>
      <NavigationBarItem to={'/projects'}>Projects</NavigationBarItem>
      <NavigationBarItem to={'/resume'}>My Resume</NavigationBarItem>
      <NavigationBarItem to={'/contact'}>Contact Me</NavigationBarItem>
    </NavigationBarStyled>
  )
};

export default NavigationBar;