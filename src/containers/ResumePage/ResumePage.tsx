import React from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import Resume from '../../components/Resume/Resume/Resume';
import IMyResume from '../../configs/resume/MyResume';
import GetResume from '../../components/Resume/GetResume/GetResume';

export interface IResumePage {
  resume: IMyResume
}

const ResumePage: React.FunctionComponent<IResumePage> = props => {
  return (
    <>
      <NavigationBar/>
      <GetResume/>
      <Resume resume={props.resume}/>
    </>
  )
};

export default ResumePage;