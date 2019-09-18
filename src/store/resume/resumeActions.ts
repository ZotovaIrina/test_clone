import {IAction} from '../../types/Action';

export enum ResumeActions {
  setVisibilityFilter = 'Set visibility filter'
}

export function setVisibilityFilterAction(value: string | null): IAction {
  return {
    type: ResumeActions.setVisibilityFilter,
    payload: value
  }
}