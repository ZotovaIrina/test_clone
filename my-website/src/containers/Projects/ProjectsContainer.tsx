import React, {useContext} from 'react';
import ProjectsPage, {IProjectsPage} from './ProjectsPage';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {setVisibilityFilterAction} from '../../store/resume/resumeActions';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IMyResume, {IProject} from '../../configs/resume/MyResume';
import {Dispatch} from 'redux';
import {MyContext} from '../../store/language/languageContext';
import {Language} from '../../types/Languages';

const mapStateToProps = (state: IStore) => ({
  projectFilter: state.myResume.pageConfig.projectFilter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProjectsFilter: (value: string | null) => dispatch(setVisibilityFilterAction(value))
});

export const ProjectsContainer:React.FC<IProjectsPage> = props => {
  const context = useContext(MyContext);

  const resume = getConfig(context.language === Language.english ? AppConfigs.myResume : AppConfigs.myResumerus) as IMyResume;
    return (
      <ProjectsPage
        projects={resume.projects.value.filter((project: IProject) => !project.notSoftwareProject)}
        technologies={resume.summary.experience.value}
        projectFilter={props.projectFilter}
        setProjectsFilter={props.setProjectsFilter}
      />
    );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
