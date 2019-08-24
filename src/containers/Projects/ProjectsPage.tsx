import React from 'react';
import IProject from '../../configs/resume/projects';
import ProjectsComponent from '../../components/Projects/ProjectsComponent/ProjectComponent';
import {v4 as uuid} from 'uuid';
import {ProjectsRowStyled} from './ProjectsPage.styled';

export interface IProjectsPage {
  projects: IProject[]
}

const ProjectsPage: React.FunctionComponent<IProjectsPage> = props => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsRowStyled data-id="ProjectsRowStyled">
      {
        props.projects
          .filter((project: IProject) => !project.notSoftwareProject)
          .map((project: IProject) => <ProjectsComponent key={uuid()} project={project}/>)
      }
      </ProjectsRowStyled>
    </div>

  )
};

export default ProjectsPage;