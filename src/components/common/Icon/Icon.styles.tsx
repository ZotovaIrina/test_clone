import styled from 'styled-components';

interface IIconStyledProps {
}

export const IconStyled = styled.svg<IIconStyledProps>`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.superDarkPrimary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
