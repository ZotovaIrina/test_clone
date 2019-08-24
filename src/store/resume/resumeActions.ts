import {IAction} from '../../types/Action';
import IProject from '../../configs/resume/projects';

export enum ResumeActions {
  addAllProjects = 'Add all projects'
}

export function addAllProjectsAction(value: IProject[]): IAction {
  return {
    type: ResumeActions.addAllProjects,
    payload: value
  }
}