import {IAction} from '../../types/Action';

export enum ContactFormActions {
  EDIT_NAME = 'EDIT_NAME',
  EDIT_EMAIL = 'EDIT_EMAIL'
}

export function editNameAction(value: string | null): IAction {
  return {
    type: ContactFormActions.EDIT_NAME,
    payload: value
  }
}

export function editEmailAction(value: string | null): IAction {
  return {
    type: ContactFormActions.EDIT_EMAIL,
    payload: value
  }
}