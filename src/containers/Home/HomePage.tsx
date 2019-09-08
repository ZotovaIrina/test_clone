import React from 'react';
import {HomePageContentContainer, TitleTextStyled} from '../../components/Home/Home.styled';
import HomeBackground from '../../components/Home/HomeBackground';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';


const HomePage: React.FunctionComponent<{}> = props => {

    return (
      <>
        <HomePageContentContainer>
          <NavigationBar/>
          <TitleTextStyled>Hello, I'm Irina Zotova. I'm Frontend Developer</TitleTextStyled>
            <div />
        </HomePageContentContainer>
        <HomeBackground />
      </>
    );
};

export default HomePage;