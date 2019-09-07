import React from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {ResumeDontPrintBlock} from './ResumePage.styled';
import Resume, {IResumePage} from '../../components/Resume/Resume/Resume';

const ResumePage: React.FunctionComponent<IResumePage> = props => {
  return (
    <>
      <ResumeDontPrintBlock><NavigationBar/></ResumeDontPrintBlock>
      <Resume resume={props.resume}/>
    </>
  )
};

export default ResumePage;