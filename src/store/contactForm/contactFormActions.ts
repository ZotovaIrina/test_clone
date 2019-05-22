import {IAction} from '../../types/Action';

export enum ContactFormActions {
  EDIT_VALUE = 'EDIT_VALUE'
}

export function editValueAction(value: object): IAction {
  return {
    type: ContactFormActions.EDIT_VALUE,
    payload: value
  }
}