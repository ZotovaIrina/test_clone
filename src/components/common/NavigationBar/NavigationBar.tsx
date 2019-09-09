import React from 'react';
import {NavigationBarItem, NavigationBarStyled} from './NavigationBar.styled';
import ChooseLanguage from '../../../containers/ChooseLanguage/ChooseLanguage';

const NavigationBar: React.FunctionComponent<{}> = props => {
  return(
    <NavigationBarStyled>
      <NavigationBarItem exact={true}  to={'/'}>Home</NavigationBarItem>
      <NavigationBarItem to={'/projects'}>Projects</NavigationBarItem>
      <NavigationBarItem to={'/resume'}>My Resume</NavigationBarItem>
      <NavigationBarItem to={'/contact'}>Contact Me</NavigationBarItem>
      <ChooseLanguage  />
    </NavigationBarStyled>
  )
};

export default NavigationBar;