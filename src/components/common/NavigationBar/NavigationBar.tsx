import React from 'react';
import {NavigationBarContainer, NavigationBarItem, NavigationBarStyled} from './NavigationBar.styled';
import ChooseLanguage from '../../../containers/ChooseLanguage/ChooseLanguage';
import {BoldText} from '../Text/Text.styled';

const NavigationBar: React.FunctionComponent<{}> = props => {
  return (
    <NavigationBarContainer data-id="NavigationBarContainer">
      <NavigationBarStyled data-id="NavigationBarStyled">
        <NavigationBarItem exact={true} to={'/'}><BoldText textId="home"/></NavigationBarItem>
        <NavigationBarItem to={'/projects'}><BoldText textId="projects"/></NavigationBarItem>
        <NavigationBarItem to={'/resume'}><BoldText textId="myResume"/></NavigationBarItem>
        <NavigationBarItem to={'/contact'}><BoldText textId="contactMe"/></NavigationBarItem>
      </NavigationBarStyled>
      <NavigationBarStyled data-id="NavigationBarStyled">
      <ChooseLanguage/>
      </NavigationBarStyled>
    </NavigationBarContainer>
  )
};

export default NavigationBar;