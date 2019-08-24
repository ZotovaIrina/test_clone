import React from 'react';
import IProject from '../../configs/resume/projects';
import ProjectsComponent from '../../components/Projects/ProjectComponent';
import {v4 as uuid} from 'uuid';

export interface IProjectsPage {
  projects: IProject[]
}

const ProjectsPage: React.FunctionComponent<IProjectsPage> = props => {
  return (
    <div>
      <h1>Projects</h1>
      {
        props.projects
          .filter((project: IProject) => !project.notSoftwareProject)
          .map((project: IProject) => <ProjectsComponent key={uuid()} project={project}/>)
      }
    </div>

  )
};

export default ProjectsPage;