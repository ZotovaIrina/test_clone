import React from 'react';
import {HomePageContentContainer, TitleTextStyled} from '../../components/Home/Home.styled';
import HomeBackground from '../../components/Home/HomeBackground';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

export interface IHomePage {
}

const HomePage: React.FunctionComponent<IHomePage> = props => {
  return (
    <>
      <HomePageContentContainer>
        <NavigationBar />
        <TitleTextStyled data-id="TitleTextStyled" textId={'myName'}/>
        <div/>
      </HomePageContentContainer>
      <HomeBackground/>
    </>
  );
};

export default HomePage;