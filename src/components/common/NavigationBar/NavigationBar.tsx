import React from 'react';
import {NavigationBarContainer, NavigationBarItem, NavigationBarStyled} from './NavigationBar.styled';
import ChooseLanguage from '../../../containers/ChooseLanguage/ChooseLanguage';

const NavigationBar: React.FunctionComponent<{}> = props => {
  return (
    <NavigationBarContainer data-id="NavigationBarContainer">
      <NavigationBarStyled data-id="NavigationBarStyled">
        <NavigationBarItem exact={true} to={'/'}>Home</NavigationBarItem>
        <NavigationBarItem to={'/projects'}>Projects</NavigationBarItem>
        <NavigationBarItem to={'/resume'}>My Resume</NavigationBarItem>
        <NavigationBarItem to={'/contact'}>Contact Me</NavigationBarItem>
      </NavigationBarStyled>
      <NavigationBarStyled data-id="NavigationBarStyled">
      <ChooseLanguage/>
      </NavigationBarStyled>
    </NavigationBarContainer>
  )
};

export default NavigationBar;