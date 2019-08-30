import React from 'react';
import IProject from '../../configs/resume/projects';
import ProjectsComponent from '../../components/Projects/ProjectsComponent/ProjectComponent';
import {v4 as uuid} from 'uuid';
import Button from '../../components/common/Button/Button.styles';
import {AddRemoveAnimation} from '../../components/common/Animation/AddRemoveAnimation.styled';
import {ProjectsRowStyled} from './ProjectsPage.styled';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

export interface IProjectsPage {
  projects: IProject[],
  projectFilter: string | null,
  technologies: string[],
  setProjectsFilter: (filter: string | null) => void
}

const ProjectsPage: React.FunctionComponent<IProjectsPage> = props => {

  const hideProject = (project: IProject): boolean => {
    if (!props.projectFilter || !project.technologies) {
      return false
    } else {
      return !project.technologies.includes(props.projectFilter)
    }
  };

  return (
    <div>
      <NavigationBar/>
      <h1>Projects</h1>
      <div>
        <h3>Technologies:</h3>
        <Button onClick={e => props.setProjectsFilter(null)}>Show All</Button>
        {props.technologies.map(technology =>
          <Button key={technology} onClick={e => props.setProjectsFilter(technology)}>{technology}</Button>
        )}
      <ProjectsRowStyled data-id="ProjectsRowStyled">
      {
        props.projects
          .map((project: IProject) =>
            <AddRemoveAnimation key={project.name} defaultWidth={'33.33%'} hide={hideProject(project)} data-id="AddRemoveAnimation">
              <ProjectsComponent key={uuid()} project={project}/>
            </AddRemoveAnimation>
          )
      }
      </ProjectsRowStyled>
      </div>
    </div>

  )
};

export default ProjectsPage;