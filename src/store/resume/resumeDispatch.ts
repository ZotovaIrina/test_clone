import getConfig, {AppConfigs} from '../../configs/getConfig';
import store from '../Store';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import {addAllProjectsAction, setVisibilityFilterAction} from './resumeActions';
import IMyResume from '../../configs/resume/MyResume';
import IProject from '../../configs/resume/projects';

const config = getConfig(AppConfigs.myResume) as IMyResume;

export const initProjects = () => {

  const projects = config.projects.filter((project: IProject) => !project.notSoftwareProject);

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(addAllProjectsAction(projects));
  });
};

export const setProjectsFilter = (filter: string | null) => {

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(setVisibilityFilterAction(filter));
  });
};