import styled, {createGlobalStyle} from 'styled-components';

export const PrintBlock = styled.div` 
@media print {
  &, & * {
    visibility: visible;
  }
  & {
    position: absolute;
    left: 0;
    top: 0;
  }
} 

`;

export const GlobalPrintStyle = createGlobalStyle`
  @media print {
  body * {
    visibility: hidden;
  }
}
`;