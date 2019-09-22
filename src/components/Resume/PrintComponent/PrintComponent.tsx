import React from 'react';
import {PrintBlock} from '../../../containers/ResumePage/ResumePage.styled';

const PrintComponent:React.FC<{}> = props => {
  return (
    <PrintBlock>
    {
      props.children
    }
    </PrintBlock>
  )
};


export default PrintComponent;