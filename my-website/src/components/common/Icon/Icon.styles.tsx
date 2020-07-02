import styled from 'styled-components';
import {IIcon} from './Icon';

export const IconStyled = styled.svg<IIcon>`
  width: ${props => props.size ? props.theme.size[props.size] : '100%'};
  height: ${props => props.size ? props.theme.size[props.size] : '100%'};
  color: ${props => props.theme.colors.superDarkPrimary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
