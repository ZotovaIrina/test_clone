import {Reducer} from 'redux';
import ContactInformation from '../../types/ContactInformation';
import {ContactFormActions} from './contactFormActions';
import {IAction} from '../../types/Action';

export interface IContactMeStore {
  formData: ContactInformation,
  formError: object
}

const defaultState:IContactMeStore = {
  formData: new ContactInformation(),
  formError: {}
};

const ContactFormStore: Reducer<IContactMeStore, any> = (state = defaultState, action:IAction) => {
  let newState = {...state};

  switch (action.type as ContactFormActions) {
    case ContactFormActions.editValue:
      newState = {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };
      break;
    case ContactFormActions.editError:
      newState = {
        ...state,
        formError: {
          ...state.formError,
          ...action.payload
        }
      };
      break;

  }
  return newState;
};

export default ContactFormStore