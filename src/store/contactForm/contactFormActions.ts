import {IAction} from '../../types/Action';

export enum ContactFormActions {
  editValue = 'Edit Value',
  editError = 'Edit Error',
  setFormIsValid = 'Set form is valid value',
  setFormFocusedField = 'Set form focused field'
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

export function setFormIsValidAction(value: boolean): IAction {
  return {
    type: ContactFormActions.setFormIsValid,
    payload: value
  }
}

export function setFormFocusedField(value?: string): IAction {
  return {
    type: ContactFormActions.setFormFocusedField,
    payload: value
  }
}