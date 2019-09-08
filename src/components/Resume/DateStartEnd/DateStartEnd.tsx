import React from 'react';
import * as moment from 'moment';
import {BoldText} from '../../../style/Text.styled';

const DateStartEnd:React.FunctionComponent<{start: string, end: string}> = props => {
  return(
    <BoldText>
      {moment.default(props.start).format('MM.YYYY')} - {props.end.toLowerCase() === 'present' ? 'Present' : moment.default(props.end).format('MM.YYYY')}
    </BoldText>
  )
};

export default DateStartEnd;