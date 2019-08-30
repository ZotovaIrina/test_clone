import React from 'react';
import IMyResume from '../../configs/resume/MyResume';
import {
  ContactRow, EducationRow,
  ResumeContainerStyled,
  ResumeH1,
  ResumeH2,
  ResumeList, ResumeListItem,
  ResumeRowStyled,
  SummaryRow
} from './ResumePage.styled';
import OpenLinkInNewTab from '../../components/common/OpenLinkInNewTab/OpenLinkInNewTab';
import DateStartEnd from '../../components/resume/DateStartEnd';
import {DateStartEndStyled} from '../../components/resume/DateStartEnd.styled';

export interface IResumePage {
  resume: IMyResume
}

const Resume: React.FunctionComponent<IResumePage> = props => {

  return (
    <ResumeContainerStyled data-id="ResumeContainerStyled">
      <table>
        <thead>
        <tr>
          <td>
            <ResumeH1 data-id={'ResumeH1'}>Irina Zotova &#9679; {props.resume.title}</ResumeH1>
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <ResumeRowStyled data-id="ResumeRowStyled contacts">
              {Object.keys(props.resume.contacts).map(contact => (
                <ContactRow key={contact}>
                  <span>{contact}: </span>
                  {(props.resume.contacts[contact] as string).includes('www') ?
                    <OpenLinkInNewTab
                      link={props.resume.contacts[contact]}>{props.resume.contacts[contact]}</OpenLinkInNewTab> :
                    <span>{props.resume.contacts[contact]}</span>}
                </ContactRow>
              ))}
            </ResumeRowStyled>

            <ResumeRowStyled data-id="ResumeRowStyled summary">
              <ResumeH2 data-id={'ResumeH2'}>Summary</ResumeH2>
              <SummaryRow data-id={'SummaryRow'}>
                <span>Technical Skills: </span>
                <span>{props.resume.summary.experience.join(', ')}</span>
              </SummaryRow>
              <SummaryRow data-id={'SummaryRow'}>
                <span>Familiar with: </span>
                <span>{props.resume.summary.familiar.join(', ')}</span>
              </SummaryRow>
            </ResumeRowStyled>

            <ResumeH2 data-id={'ResumeH2'}>Experience</ResumeH2>
            {
              props.resume.projects.map(project =>
                <ResumeRowStyled key={project.name} data-id="ResumeRowStyled project">
                  <SummaryRow>
                    <DateStartEnd start={project.start} end={project.end}/>
                    <span>{project.name}, {project.position}, {project.address}</span>
                  </SummaryRow>
                  <div>
                    <div>Responsibilities:</div>
                    <ResumeList data-id="ResumeList">
                      {
                        project.description.map(item => <ResumeListItem data-id="ResumeListItem"
                                                                        key={item}>{item}</ResumeListItem>)
                      }
                    </ResumeList>
                  </div>
                  {project.technologies ? <div>Technologies: {project.technologies.join(', ')}</div> : null}
                </ResumeRowStyled>
              )
            }

            <ResumeRowStyled data-id="ResumeRowStyled courses">
              <ResumeH2>Courses</ResumeH2>
              {
                props.resume.education.courses.map(course =>
                  <EducationRow>
                    <DateStartEndStyled>{course.startYear} - {course.endYear}</DateStartEndStyled>
                    <span>{course.title}</span>
                    {course.url ? <OpenLinkInNewTab link={course.url}>certificate</OpenLinkInNewTab> : null}
                  </EducationRow>
                )
              }
            </ResumeRowStyled>

            <ResumeRowStyled data-id="ResumeRowStyled education">
              <ResumeH2>Education</ResumeH2>
              {
                props.resume.education.degree.map(course =>
                  <EducationRow>
                    <DateStartEndStyled>{course.startYear} - {course.endYear}</DateStartEndStyled>
                    <span>{course.title}</span>
                    {course.url ? <OpenLinkInNewTab link={course.url}>certificate</OpenLinkInNewTab> : null}
                  </EducationRow>
                )
              }
            </ResumeRowStyled>
          </td>
        </tr>
        </tbody>
      </table>


    </ResumeContainerStyled>


  )
};

export default Resume;