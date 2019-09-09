import {Language} from '../../types/Languages';
import {Reducer} from 'redux';
import {IAction} from '../../types/Action';
import {LanguageActions} from './languageActions';

export interface ILanguageStore {
language: Language
}

const defaultState:ILanguageStore = {
  language: Language.english
};

const LanguageReducer: Reducer<ILanguageStore, any> = (state = defaultState, action:IAction) => {
  let newState = {...state};

  switch (action.type as LanguageActions) {
    case LanguageActions.setLanguage:
      newState = {
        ...state,
        language: action.payload
      };
      break;
  }

  return newState;

};

export default LanguageReducer;