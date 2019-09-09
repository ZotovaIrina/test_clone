import React from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {ResumeDontPrintBlock} from './ResumePage.styled';
import Resume from '../../components/Resume/Resume/Resume';
import IMyResume from '../../configs/resume/MyResume';

export interface IResumePage {
  resume: IMyResume
}

const ResumePage: React.FunctionComponent<IResumePage> = props => {
  return (
    <>
      <ResumeDontPrintBlock>
        <NavigationBar />
      </ResumeDontPrintBlock>
      <Resume resume={props.resume}/>
    </>
  )
};

export default ResumePage;