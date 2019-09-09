import React from 'react';
import ProjectsPage, {IProjectsPage} from './ProjectsPage';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {initProjects} from '../../store/resume/resumeDispatch';
import {setVisibilityFilterAction} from '../../store/resume/resumeActions';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IMyResume from '../../configs/resume/MyResume';
import {Dispatch} from 'redux';

const config = getConfig(AppConfigs.myResume) as IMyResume;

const mapStateToProps = (state: IStore) => ({
  projects: state.myResume.projects,
  projectFilter: state.myResume.pageConfig.projectFilter,
  technologies: config.summary.experience
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProjectsFilter: (value: string | null) => dispatch(setVisibilityFilterAction(value))
});

export class ProjectsContainer extends React.Component<IProjectsPage> {
  constructor(props: IProjectsPage) {
    super(props);
    initProjects();
  }

  render(){
    return (
      <ProjectsPage
        projects={this.props.projects}
        technologies={this.props.technologies}
        projectFilter={this.props.projectFilter}
        setProjectsFilter={this.props.setProjectsFilter}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
