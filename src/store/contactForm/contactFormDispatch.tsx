import store from '../Store';
import {editErrorAction, editValueAction, setFormFocusedField, setFormIsValidAction} from './contactFormActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import {ValidationType} from '../../utils/validation/validator/validator';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import allFieldsIsValidation, {IAllFieldsValidation} from '../../utils/validation/allFieldsIsValidation';
import {SendEmail} from '../../API/SendEmail';

const config = getConfig(AppConfigs.contactMe);

export const updateContactMeForm = (property: string, value: any, propertyType?: ValidationType) => {

  const validation: IAllFieldsValidation = allFieldsIsValidation({
    ...store.getState().contactForm.formData,
    [property]: value
  }, config);

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(editValueAction({[property]: value}));
    dispatch(editErrorAction({[property]: validation.validationMessages[property]}));
    dispatch(setFormIsValidAction(validation.valid));
  });
};

export const submitContactMeForm = () => {
  if (!store.getState().contactForm.pageConfig.formIsValid) {
    const formValidation = allFieldsIsValidation(store.getState().contactForm.formData, config);
    const properties = Object.keys(config);

    (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
      dispatch(setFormFocusedField(undefined));
    });

    properties.forEach(property => {

      (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
        dispatch(editErrorAction({[property]: formValidation.validationMessages[property]}));
      });

      if (formValidation.validationMessages[property] && !store.getState().contactForm.pageConfig.focusedField) {
        (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
          dispatch(setFormFocusedField(property));
        });
      }

    })
  }
  else {
    SendEmail.send(store.getState().contactForm.formData)
      .then(response => {
        console.log('Send!!!!', response);
      })
      .catch(error => {
        console.log('Error!!!!', error)
      });
  }

};