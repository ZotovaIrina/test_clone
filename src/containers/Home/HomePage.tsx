import React from 'react';
import {TitleTextContainer, TitleTextStyled} from '../../components/Home/Home.styled';
import HomeBackground from '../../components/Home/HomeBackground';


const HomePage: React.FunctionComponent<{}> = props => {

    return (
      <>
        <TitleTextContainer>
          <TitleTextStyled>Hello, I'm Irina Zotova. I'm Frontend Developer</TitleTextStyled>
        </TitleTextContainer>
        <HomeBackground />
      </>
    );
};

export default HomePage;