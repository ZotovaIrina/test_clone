import React from 'react';
import ProjectsPage from './ProjectsPage';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {getListOfTechnologies, initProjects} from '../../store/resume/resumeDispatch';
import IProject from '../../configs/resume/projects';

interface IProjectsContainerProps {
  projects: IProject[];
  technologies: string[];
}

const mapStateToProps = (state: IStore) => ({
  projects: state.myResume.projects,
  technologies: getListOfTechnologies()
});

const mapDispatchToProps = () => ({
});

export class ProjectsContainer extends React.Component<IProjectsContainerProps> {
  constructor(props: IProjectsContainerProps) {
    super(props);
    initProjects();
  }

  render(){
    return (
      <ProjectsPage projects={this.props.projects} technologies={this.props.technologies} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);

// export default ProjectsContainer;