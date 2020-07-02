import React, {useState} from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import Resume from '../../components/Resume/Resume/Resume';
import IMyResume from '../../configs/resume/MyResume';
import GetResume from '../../components/Resume/GetResume/GetResume';
import {ResumeContainerStyled, ResumePageContainer} from './ResumePage.styled';
import PrintComponent from '../../components/Resume/PrintComponent/PrintComponent';

export interface IResumePage {
  resume: IMyResume
}

const ResumePage: React.FunctionComponent<IResumePage> = props => {
  const [startPrint, toggleStyle] = useState(false);

  const addGlobalStyle = (start: boolean) => {
    toggleStyle(start)
  };

  const onPrintFinished= function(printed: any){
    addGlobalStyle(false);
  };

  const print = async function() {
    await addGlobalStyle(true);
    onPrintFinished(window.print());
  };

  return (
    <>
      <NavigationBar/>
      <ResumePageContainer data-id="ResumePageContainer">
        <GetResume onPrintClick={print}/>
        <ResumeContainerStyled data-id="ResumeContainerStyled">
          <PrintComponent startPrint={startPrint}>
            <Resume resume={props.resume}/>
          </PrintComponent>
        </ResumeContainerStyled>
      </ResumePageContainer>

    </>
  )
};

export default ResumePage;