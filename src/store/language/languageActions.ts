import {IAction} from '../../types/Action';
import {Language} from '../../types/Languages';

export enum LanguageActions {
  setLanguage = 'Set Language'
}

export function setLanguageAction(value: Language): IAction {
  return {
    type: LanguageActions.setLanguage,
    payload: value
  }
}