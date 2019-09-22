import React from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import Resume from '../../components/Resume/Resume/Resume';
import IMyResume from '../../configs/resume/MyResume';
import GetResume from '../../components/Resume/GetResume/GetResume';
import {ResumeContainerStyled, ResumePageContainer} from './ResumePage.styled';

export interface IResumePage {
  resume: IMyResume
}

const ResumePage: React.FunctionComponent<IResumePage> = props => {
  return (
    <>
      <NavigationBar/>
      <ResumePageContainer data-id="ResumePageContainer">
        <GetResume/>
        <ResumeContainerStyled data-id="ResumeContainerStyled">
          <Resume resume={props.resume}/>
        </ResumeContainerStyled>
      </ResumePageContainer>
    </>
  )
};

export default ResumePage;