import React from 'react';
import {GlobalPrintStyle, PrintBlock} from './Print.style';

const PrintComponent: React.FC<{startPrint: boolean}> = props => {

  return (
    <>
      <PrintBlock>
        {
          props.children
        }
      </PrintBlock>
      {
        props.startPrint ?
          <GlobalPrintStyle /> :
          null
      }
    </>
  )
};


export default PrintComponent;