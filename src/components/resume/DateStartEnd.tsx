import React from 'react';
import * as moment from 'moment';
import {DateStartEndStyled} from './DateStartEnd.styled';

const DateStartEnd:React.FunctionComponent<{start: string, end: string}> = props => {
  return(
    <DateStartEndStyled data-id="DateStartEndStyled">
      {moment.default(props.start).format('MM.YYYY')} - {props.end.toLowerCase() === 'present' ? 'Present' : moment.default(props.end).format('MM.YYYY')}
    </DateStartEndStyled>
  )
};

export default DateStartEnd;