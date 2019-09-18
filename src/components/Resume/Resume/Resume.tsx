import React from 'react';
import IMyResume from '../../../configs/resume/MyResume';
import {
  ContactRow, EducationRow,
  ResumeContainerStyled,
  ResumeH1,
  ResumeH2,
  ResumeList, ResumeListItem,
  ResumeRowStyled,
  SummaryRow
} from '../../../containers/ResumePage/ResumePage.styled';
import OpenLinkInNewTab from '../../common/OpenLinkInNewTab/OpenLinkInNewTab';
import {BoldText, ItalicText} from '../../common/Text/Text.styled';
import DateStartEnd from '../DateStartEnd/DateStartEnd';

export interface IResume {
  resume: IMyResume
}

const Resume: React.FunctionComponent<IResume> = props => {

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
              {props.resume.contacts.map(contact => (
                <ContactRow key={contact.label}>
                  <span>{contact.label}: </span>
                  {contact.value.includes('www') ?
                    <OpenLinkInNewTab
                      link={contact.value}>{contact.value}</OpenLinkInNewTab> :
                    <span>{contact.value}</span>}
                </ContactRow>
              ))}
            </ResumeRowStyled>

            <ResumeRowStyled data-id="ResumeRowStyled summary">
              <ResumeH2 data-id={'ResumeH2'}>{props.resume.summary.label}</ResumeH2>
              <SummaryRow data-id={'SummaryRow'}>
                <ItalicText>{props.resume.summary.experience.label}: </ItalicText>
                <span>{props.resume.summary.experience.value.join(', ')}</span>
              </SummaryRow>
              <SummaryRow data-id={'SummaryRow'}>
                <ItalicText>{props.resume.summary.familiar.label}: </ItalicText>
                <span>{props.resume.summary.familiar.value.join(', ')}</span>
              </SummaryRow>
            </ResumeRowStyled>

            <ResumeH2 data-id={'ResumeH2'}>{props.resume.projects.label}</ResumeH2>
            {
              props.resume.projects.value.map(project =>
                <ResumeRowStyled key={project.name} data-id="ResumeRowStyled project">
                  <SummaryRow>
                    <DateStartEnd start={project.start} end={project.end}/>
                    <span>{project.name}, {project.position}, {project.address}</span>
                  </SummaryRow>
                  <div>
                    <div>{project.description.label}</div>
                    <ResumeList data-id="ResumeList">
                      {
                        project.description.value.map(item => <ResumeListItem data-id="ResumeListItem"
                                                                        key={item}>{item}</ResumeListItem>)
                      }
                    </ResumeList>
                  </div>
                  {project.technologies ? <div>
                    <ItalicText>{project.technologies.label} </ItalicText>
                    <span>{project.technologies.value.join(', ')}</span>
                  </div> : null}
                </ResumeRowStyled>
              )
            }

            <ResumeRowStyled data-id="ResumeRowStyled courses">
              <ResumeH2>{props.resume.education.courses.label}</ResumeH2>
              {
                props.resume.education.courses.value.map(course =>
                  <EducationRow key={course.title}>
                    <BoldText>{course.startYear} - {course.endYear}</BoldText>
                    <span>{course.title}</span>
                    {course.url ? <OpenLinkInNewTab link={course.url}>certificate</OpenLinkInNewTab> : null}
                  </EducationRow>
                )
              }
            </ResumeRowStyled>

            <ResumeRowStyled data-id="ResumeRowStyled education">
              <ResumeH2>{props.resume.education.degree.label}</ResumeH2>
              {
                props.resume.education.degree.value.map(course =>
                  <EducationRow key={course.title}>
                    <BoldText>{course.startYear} - {course.endYear}</BoldText>
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