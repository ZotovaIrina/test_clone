import React from 'react';
import IMyResume from '../../../configs/resume/MyResume';
import {
  ContactRow, EducationRow,
  ResumeContainerPrintStyled,
  ResumeH1,
  ResumeH2,
  ResumeList, ResumeListItem,
  ResumeRowStyled, ResumeTable, ResumeTableHeader,
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
    <ResumeTable>
      <thead>
      <tr>
        <td>
          <ResumeTableHeader>
            <ResumeH1 data-id={'ResumeH1'}>{props.resume.myName}</ResumeH1>
            <ResumeH1 data-id={'ResumeH1'}>{props.resume.title}</ResumeH1>
          </ResumeTableHeader>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <ResumeContainerPrintStyled data-id="ResumeContainerStyled">
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
                  <ResumeRowStyled data-id="ResumeRowStyled">
                    <div>{project.description.label}:</div>
                    <ResumeList data-id="ResumeList">
                      {
                        project.description.value.map(item => <ResumeListItem data-id="ResumeListItem"
                                                                              key={item}>{item}</ResumeListItem>)
                      }
                    </ResumeList>
                  </ResumeRowStyled>
                  {project.technologies ? <div>
                    <ItalicText>{project.technologies.label}: </ItalicText>
                    <span>{project.technologies.value.join(', ')}</span>
                  </div> : null}
                </ResumeRowStyled>
              )
            }
            <ResumeRowStyled data-id="ResumeRowStyled">

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
            </ResumeRowStyled>
          </ResumeContainerPrintStyled>
        </td>
      </tr>
      </tbody>
    </ResumeTable>


  )
};

export default Resume;