import IProject from '../../configs/resume/projects';
import {Reducer} from 'redux';
import {IAction} from '../../types/Action';
import {ResumeActions} from './resumeActions';

export interface IResumeStore {
  projects: IProject[];
}

const defaultState:IResumeStore = {
  projects: []
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
  }

  return newState;

};

export default ResumeReducer;