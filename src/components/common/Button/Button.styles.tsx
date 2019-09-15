import styled from 'styled-components';

interface IButtonType {
  backgroundSrc?: string
}

const Button = styled.button<{}>`
`;

export const ImageButton = styled.button<IButtonType>`
  height: ${props => props.theme.size.large};
  width: ${props => props.theme.size.large};
  border-radius: 50%;
  position: relative;
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