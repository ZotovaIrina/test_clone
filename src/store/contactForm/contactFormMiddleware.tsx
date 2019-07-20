import store from '../Store';
import {editErrorAction, editValueAction} from './contactFormActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import validator, {ValidationType} from '../../utils/validator/validator';

export const updateContactMeForm = (property: string, propertyType: ValidationType, value: any) => {
  const errorMessage = validator(
    value,
    {
      validationType: propertyType,
      required: true,
      label: property
    }
  ).message;

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(editValueAction({[property]: value}));
    dispatch(editErrorAction({[property]: errorMessage}));
  });
};