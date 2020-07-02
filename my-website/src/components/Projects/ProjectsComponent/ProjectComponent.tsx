import React from 'react';
import getImage from '../../../utils/getImage';
import {
  ProjectContainerStyled,
  ProjectDescriptionStyled,
  ProjectImageStyled
} from './ProjectComponent.styles';
import LazyLoad from 'react-lazyload';
import {IProject} from '../../../configs/resume/MyResume';
import {H3, ItalicText, TextTranslate} from '../../common/Text/Text.styled';


interface IProjectComponent {
  project: IProject
}

const ProjectsComponent: React.FunctionComponent<IProjectComponent> = props => {
  return (
    <ProjectContainerStyled data-id="ProjectContainerStyled">
      <ProjectDescriptionStyled data-id="ProjectDescriptionStyled">
        <H3>{props.project.name}</H3>
        <TextTranslate>{props.project.description.value[0]}</TextTranslate>
        {
          props.project.technologies ?
            <>
              <ItalicText>{props.project.technologies.label}: </ItalicText>
              <TextTranslate>{props.project.technologies.value.join(', ')}</TextTranslate>
            </> :
            null
        }
      </ProjectDescriptionStyled>
      <ProjectImageStyled data-id="ProjectImageStyled">
        <LazyLoad>
          <img src={getImage(props.project.image)} alt="logo"/>
        </LazyLoad>
      </ProjectImageStyled>
    </ProjectContainerStyled>

  )
};

export default ProjectsComponent;