import store from '../Store';
import {editErrorAction, editValueAction} from './contactFormActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import validator, {ValidationType} from '../../utils/validation/validator/validator';
import getConfig, {AppConfigs} from '../../configs/getConfig';

export const updateContactMeForm = (property: string, value: any, propertyType?: ValidationType) => {

  const config = getConfig(AppConfigs.contactMe);
  console.log(config, property);

  const errorMessage = validator(
    value,
    {
      validationType: propertyType || config[property].validationType,
      required: config[property].formCell.isRequired,
      label: config[property].formCell.label
    }
  ).message;

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(editValueAction({[property]: value}));
    dispatch(editErrorAction({[property]: errorMessage}));
  });
};