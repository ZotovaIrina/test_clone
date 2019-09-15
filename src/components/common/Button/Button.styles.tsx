import styled from 'styled-components';
import React from 'react';
import {BoldText} from '../Text/Text.styled';

interface IImageButtonType extends React.HTMLProps<HTMLButtonElement>{
  active?: boolean;
  backgroundSrc?: string;
}
interface IButtonType extends React.HTMLProps<HTMLButtonElement>{
  active?: boolean;
  textId?: string;
}

export const Button: React.FC<IButtonType> = props => {
  return(
    <ButtonStyled onClick={props.onClick} active={props.active}>
      <BoldText textId={props.textId}>
        {props.children}
      </BoldText>
    </ButtonStyled>
  )
};

const ButtonStyled = styled.button<{active?: boolean, textId?: string}>`
width: 100%;
position: relative;
padding: ${props => props.theme.spacing.gapValue/2}${props => props.theme.spacing.gapUnit}  ${props => props.theme.spacing.gap};
background-color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.primary};
border: none;
color: white;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
border-radius: ${props => props.theme.spacing.gapValue/4}${props => props.theme.spacing.gapUnit};

&:focus {outline:0;}
`;

export const ImageButton:React.FC<IImageButtonType> = props => {
  return(
    <ImageButtonContainer data-id="ImageButtonContainer">
      <ImageButtonStyled  backgroundSrc={props.backgroundSrc} onClick={props.onClick}/>
    </ImageButtonContainer>
  )
};

const ImageButtonContainer = styled.div`
width: 100%;
padding-bottom: 100%;
position: relative;
`;

export const ImageButtonStyled = styled.button<IImageButtonType>`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  top:0;
  right: 0;
  border: 1px solid ${props => props.theme.colors.darkPrimary};
  box-shadow: 10px 10px 20px ${props => props.theme.colors.darkPrimary}, inset 0px 0px 10px ${props => props.theme.colors.darkPrimary};
  display: inline-block;
  margin: 5%;
  background-image: url(${(props: IImageButtonType) => props.backgroundSrc ? props.backgroundSrc : ''});
  background-size: cover;
  
  &:focus {outline:0;}
  
  &:after {
  background-color: rgba(255, 255, 255, 0.3);
  content: '';
  height: 45%;
  width: 12%;
  position: absolute;
  top: 4%;
  left: 15%;
  border-radius: 50%;
  transform: rotate(40deg);
`;