import IProject from '../../configs/resume/projects';
import {Reducer} from 'redux';
import {IAction} from '../../types/Action';
import {ResumeActions} from './resumeActions';

export interface IResumePageConfig {
  projectFilter: string| null;
}

export interface IResumeStore {
  projects: IProject[];
  pageConfig: IResumePageConfig;
}

const defaultState:IResumeStore = {
  projects: [],
  pageConfig: {
    projectFilter: null
  }
};

const ResumeReducer: Reducer<IResumeStore, any> = (state = defaultState, action:IAction) => {
  let newState = {...state};

  switch (action.type as ResumeActions) {
    case ResumeActions.addAllProjects:
      newState = {
        ...state,
        projects: action.payload
      };
      break;
    case ResumeActions.setVisibilityFilter:
      newState = {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          projectFilter: action.payload
        }
      };
      break;
  }

  return newState;

};

export default ResumeReducer;