import React from 'react';
import ProjectsPage from './ProjectsPage';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {initProjects} from '../../store/resume/resumeDispatch';
import IProject from '../../configs/resume/projects';
import {setVisibilityFilterAction} from '../../store/resume/resumeActions';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IMyResume from '../../configs/resume/MyResume';
import {Dispatch} from 'redux';

interface IProjectsContainerProps {
  projects: IProject[];
  technologies: string[];
  setProjectsFilter: (filter: string | null) => void
}

const config = getConfig(AppConfigs.myResume) as IMyResume;

const mapStateToProps = (state: IStore) => ({
  projects: state.myResume.projects
    .filter(project => !project.technologies
      || !state.myResume.pageConfig.projectFilter
      || project.technologies.includes(state.myResume.pageConfig.projectFilter)),
  technologies: config.summary.experience
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProjectsFilter: (value: string | null) => dispatch(setVisibilityFilterAction(value))
});

export class ProjectsContainer extends React.Component<IProjectsContainerProps> {
  constructor(props: IProjectsContainerProps) {
    super(props);
    initProjects();
  }

  render(){
    return (
      <ProjectsPage
        projects={this.props.projects}
        technologies={this.props.technologies}
        setProjectsFilter={this.props.setProjectsFilter}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
