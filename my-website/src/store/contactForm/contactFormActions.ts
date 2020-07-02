import {IAction} from '../../types/Action';

export enum ContactFormActions {
  editValue = 'Edit Value',
  editError = 'Edit Error',
  setFormIsValid = 'Set form is valid value',
  setFormFocusedField = 'Set form focused field',
  setSendEmailInProcess= 'set Send Email In Process',
  setSendEmailSuccess = 'set Send Email Success',
  setSendEmailError = 'set Send Email Error',
  setDefaultForm = 'set Default Form'
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

export function setSendEmailInProcess(): IAction {
  return {
    type: ContactFormActions.setSendEmailInProcess,
    payload: undefined
  }
}

export function setSendEmailSuccess(): IAction {
  return {
    type: ContactFormActions.setSendEmailSuccess,
    payload: undefined
  }
}

export function setSendEmailError(value: string | null): IAction {
  return {
    type: ContactFormActions.setSendEmailError,
    payload: value
  }
}

export function setDefaultForm(): IAction {
  return {
    type: ContactFormActions.setDefaultForm,
    payload: undefined
  }
}