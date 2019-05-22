import store from '../Store';
import {editErrorAction, editValueAction} from './contactFormActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';

export const updateContactMeForm = (value: object) => {
  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(editValueAction(value));
    dispatch(editErrorAction(value));
  });
};