import React from 'react';
import {NavigationBarItem, NavigationBarStyled} from './NavigationBar.styled';
import ChooseLanguage, {IChooseLanguage} from '../ChooseLanguage/ChooseLanguage';

const NavigationBar: React.FunctionComponent<IChooseLanguage> = props => {
  return(
    <NavigationBarStyled>
      <NavigationBarItem exact={true}  to={'/'}>Home</NavigationBarItem>
      <NavigationBarItem to={'/projects'}>Projects</NavigationBarItem>
      <NavigationBarItem to={'/resume'}>My Resume</NavigationBarItem>
      <NavigationBarItem to={'/contact'}>Contact Me</NavigationBarItem>
      <ChooseLanguage onChange={props.onChange} language={props.language} />
    </NavigationBarStyled>
  )
};

export default NavigationBar;