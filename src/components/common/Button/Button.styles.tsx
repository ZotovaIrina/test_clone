import styled from 'styled-components';
import React from 'react';

interface IButtonType extends React.HTMLProps<HTMLButtonElement>{
  backgroundSrc?: string
}

const Button = styled.button<{}>`
`;

export const ImageButton:React.FC<IButtonType> = props => {
  return(
    <ImageButtonContainer data-id="ImageButtonContainer">
      <ImageButtonStyled  backgroundSrc={props.backgroundSrc}/>
    </ImageButtonContainer>
  )
};

const ImageButtonContainer = styled.div`
width: 100%;
padding-bottom: 100%;
position: relative;
`;

export const ImageButtonStyled = styled.button<IButtonType>`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  top:0;
  right: 0;
  border: 1px solid ${props => props.theme.colors.darkPrimary};
  box-shadow: inset -2px -2px ${props => props.theme.size.largeValue/4}px ${props => props.theme.colors.darkPrimary}, 10px 10px 20px ${props => props.theme.colors.darkPrimary}, inset 0px 0px 10px ${props => props.theme.colors.darkPrimary};
  display: inline-block;
  margin: 5%;
  
background-image: url(${(props: IButtonType) => props.backgroundSrc ? props.backgroundSrc : ''});
background-size: cover;
  
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


export default Button;