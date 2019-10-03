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

const ErrorTextStyled = styled.span`
font-family: RegularFont;
color: ${props => props.theme.colors.secondary};
`;

const H1Styled = styled.h1`
font-family: RegularFont;
`;

const H2Styled = styled.h2`
font-family: RegularFont;
`;

const H3Styled = styled.h3`
font-family: RegularFont;
`;

export const TextTranslate: React.FC<IText> = props => {
  return <TextStyled className={props.className}>
    <TextComponent {...props}>{props.children}</TextComponent>
  </TextStyled>
};

export const ErrorText: React.FC<IText> = props => {
  return <ErrorTextStyled className={props.className}>
    <TextComponent {...props}>{props.children}</TextComponent>
  </ErrorTextStyled>
};

export const BoldText: React.FC<IText> = props => {
  return <BoldTextStyled className={props.className}>
    <TextComponent {...props}/>
  </BoldTextStyled>
};

export const ItalicText: React.FC<IText> = props => {
  return <ItalicTextStyled className={props.className}>
    <TextComponent {...props}/>
  </ItalicTextStyled>
};

export const H1: React.FC<IText> = props => {
  return <H1Styled className={props.className}>
    <TextComponent {...props}/>
  </H1Styled>
};

export const H2: React.FC<IText> = props => {
  return <H2Styled className={props.className}>
    <TextComponent {...props}/>
  </H2Styled>
};

export const H3: React.FC<IText> = props => {
  return <H3Styled className={props.className}>
    <TextComponent {...props}/>
  </H3Styled>
};