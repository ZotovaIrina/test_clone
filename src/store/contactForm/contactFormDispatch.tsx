import store from '../Store';
import {editErrorAction, editValueAction, setFormIsValidAction} from './contactFormActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import validator, {ValidationType} from '../../utils/validation/validator/validator';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import allFieldsIsValid from '../../utils/validation/allFieldsIsValid';

const config = getConfig(AppConfigs.contactMe);

export const updateContactMeForm = (property: string, value: any, propertyType?: ValidationType) => {

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
    dispatch(setFormIsValidAction(allFieldsIsValid(store.getState().contactForm.formData, config)));
  });
};

export const submitContactMeForm = () => {
  if(!store.getState().contactForm.pageConfig.formIsValid) {
const data = store.getState().contactForm.formData;
    const properties = Object.keys(data);
    properties.forEach(property => {
      const errorMessage = validator(
        data[property],
        {
          validationType: config[property].validationType,
          required: config[property].formCell.isRequired,
          label: config[property].formCell.label
        }
      ).message;

      (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
        dispatch(editErrorAction({[property]: errorMessage}));
      });

    })
  }

};