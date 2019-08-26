import React from 'react';
import IProject from '../../configs/resume/projects';
import ProjectsComponent from '../../components/Projects/ProjectsComponent/ProjectComponent';
import {v4 as uuid} from 'uuid';
import {ProjectsRowStyled} from './ProjectsPage.styled';
import Button from '../../components/common/Button/Button.styles';

export interface IProjectsPage {
  projects: IProject[],
  technologies: string[],
  setProjectsFilter: (filter: string | null) => void
}

const ProjectsPage: React.FunctionComponent<IProjectsPage> = props => {

  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h3>Technologies:</h3>
        <Button onClick={e => props.setProjectsFilter(null)}>Show All</Button>
        {props.technologies.map(technology =>
          <Button key={technology} onClick={e => props.setProjectsFilter(technology)}>{technology}</Button>
        )}
      </div>
      <ProjectsRowStyled data-id="ProjectsRowStyled">
      {
        props.projects
          .map((project: IProject) => <ProjectsComponent key={uuid()} project={project}/>)
      }
      </ProjectsRowStyled>
    </div>

  )
};

export default ProjectsPage;