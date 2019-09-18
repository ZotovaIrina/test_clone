import {Reducer} from 'redux';
import {IAction} from '../../types/Action';
import {ResumeActions} from './resumeActions';

export interface IResumePageConfig {
  projectFilter: string| null;
}

export interface IResumeStore {
  pageConfig: IResumePageConfig;
}

const defaultState:IResumeStore = {
  pageConfig: {
    projectFilter: null
  }
};

const ResumeReducer: Reducer<IResumeStore, any> = (state = defaultState, action:IAction) => {
  let newState = {...state};

  switch (action.type as ResumeActions) {
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