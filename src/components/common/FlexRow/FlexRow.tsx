import styled from 'styled-components';

interface IFlex {
  justifyContent?: 'space-between' | 'start' | 'center' | 'end' | 'flex-end' | 'space-around';
  verticalAlign?: 'center' | 'flex-end' | 'flex-start';
  width?: 'auto' | 'min-content' | 'max-content' | number;
}

const getWidthValue = (propWidth: IFlex['width']): string => {
  let width = 'auto';
  if (propWidth) {
    if (typeof propWidth === 'string') {
      width = propWidth;
    } else {
      width = `${propWidth}%`;
    }
  }
  return width;
};

const FlexRow = styled.div<IFlex>`
      display: flex;
      position: relative;
      margin: 0;
      justify-content: ${props => `${props.justifyContent ? props.justifyContent : 'start'}`};
      align-items: ${props => `${props.verticalAlign ? props.verticalAlign : 'center'}`};
      width: ${props => getWidthValue(props.width)};
      
      & > * {
      margin-left: 16px;
      }
      
      & > *:first-child {
      margin: 0;
      }
`;


export default FlexRow;