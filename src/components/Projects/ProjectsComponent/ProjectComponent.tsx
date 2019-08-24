import React from 'react';
import IProject from '../../../configs/resume/projects';
import getImage from '../../../utils/getImage';
import {v4 as uuid} from 'uuid';
import {ProjectContainerStyled, ProjectDescriptionStyled, ProjectImageStyled} from './ProjectComponent.styles';
import LazyLoad from 'react-lazyload';


interface IProjectComponent {
  project: IProject
}

const ProjectsComponent: React.FunctionComponent<IProjectComponent> = props => {
  return (
    <ProjectContainerStyled data-id="ProjectContainerStyled">
      <ProjectDescriptionStyled data-id="ProjectDescriptionStyled">
        <h3>{props.project.name}</h3>
        {props.project.description.map((item: string) => (
          <p key={uuid()}>{item}</p>
        ))}
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