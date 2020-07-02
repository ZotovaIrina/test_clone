import store from '../Store';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import {setLanguageAction} from './languageActions';
import {Language} from '../../types/Languages';

export const setLanguage = (language: Language) => {

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(setLanguageAction(language));
  });
};