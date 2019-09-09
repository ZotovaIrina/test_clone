import styled from 'styled-components';
import TextComponent, {IText} from './Text';
import * as React from 'react';

const BoldTextStyled = styled.span`
font-family: BoldFont;
`;

const ItalicTextStyled = styled.span`
font-family: ItalicFont;
`;

const TextStyled = styled.span`
font-family: RegularFont;

`;

const H1Styled = styled.h1`
font-family: RegularFont;
`;

export const Text: React.FC<IText> = props => {
  return <TextStyled>
    <TextComponent {...props}/>
  </TextStyled>
};

export const BoldText: React.FC<IText> = props => {
  return <BoldTextStyled>
    <TextComponent {...props}/>
  </BoldTextStyled>
};

export const ItalicText: React.FC<IText> = props => {
  return <ItalicTextStyled>
    <TextComponent {...props}/>
  </ItalicTextStyled>
};

export const H1: React.FC<IText> = props => {
  return <H1Styled>
    <TextComponent {...props}/>
  </H1Styled>
};