import getConfig, {AppConfigs} from '../../configs/getConfig';
import store from '../Store';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import {addAllProjectsAction} from './resumeActions';
import IMyResume from '../../configs/resume/MyResume';
import IProject from '../../configs/resume/projects';

const config = getConfig(AppConfigs.myResume) as IMyResume;

export const initProjects = () => {

  const projects = config.projects.filter((project: IProject) => !project.notSoftwareProject);

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(addAllProjectsAction(projects));
  });
};

export const getListOfTechnologies = (): string[] => {
  return config.summary.experience
};