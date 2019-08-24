import React from 'react';
import IProject from '../../configs/resume/projects';
import LazyLoad from 'react-lazyload';
import getImage from '../../utils/getImage';
import {v4 as uuid} from 'uuid';


interface IProjectComponent {
  project: IProject
}

const ProjectsComponent: React.FunctionComponent<IProjectComponent> = props => {
  return (
    <div>
      <h3>{props.project.name}</h3>
      {props.project.description.map((item: string) => (
        <p key={uuid()}>{item}</p>
      ))}
      <LazyLoad>
        <img src={getImage(props.project.image)} alt="logo" />
      </LazyLoad>
    </div>

  )
};

export default ProjectsComponent;