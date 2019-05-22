import {IAction} from '../../types/Action';

export enum ContactFormActions {
  editValue = 'Edit Value',
  editError = 'Edit Error'
}

export function editValueAction(value: object): IAction {
  return {
    type: ContactFormActions.editValue,
    payload: value
  }
}

export function editErrorAction(value: object): IAction {
  return {
    type: ContactFormActions.editError,
    payload: value
  }
}