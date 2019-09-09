import React from 'react';
import {HomePageContentContainer, TitleTextStyled} from '../../components/Home/Home.styled';
import HomeBackground from '../../components/Home/HomeBackground';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {IChooseLanguage} from '../../components/common/ChooseLanguage/ChooseLanguage';

export interface IHomePage {
  language: IChooseLanguage
}

const HomePage: React.FunctionComponent<IHomePage> = props => {
console.log(props);
    return (
      <>
        <HomePageContentContainer>
          <NavigationBar {...props.language} />
          <TitleTextStyled>Hello, I'm Irina Zotova. I'm Frontend Developer</TitleTextStyled>
            <div />
        </HomePageContentContainer>
        <HomeBackground />
      </>
    );
};

export default HomePage;