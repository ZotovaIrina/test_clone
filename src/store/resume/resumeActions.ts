import {IAction} from '../../types/Action';
import IProject from '../../configs/resume/projects';

export enum ResumeActions {
  addAllProjects = 'Add all projects',
  setVisibilityFilter = 'Set visibility filter'
}

export function addAllProjectsAction(value: IProject[]): IAction {
  return {
    type: ResumeActions.addAllProjects,
    payload: value
  }
}

export function setVisibilityFilterAction(value: string | null): IAction {
  return {
    type: ResumeActions.setVisibilityFilter,
    payload: value
  }
}