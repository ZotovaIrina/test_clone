import {Reducer} from 'redux';
import ContactInformation from '../../types/ContactInformation';
import {ContactFormActions} from './contactFormActions';
import {IAction} from '../../types/Action';


interface IContactFormPageConfig {
  formIsValid: boolean;
}

export interface IContactMeStore {
  formData: ContactInformation,
  formError: object,
  pageConfig: IContactFormPageConfig
}

const defaultState:IContactMeStore = {
  formData: new ContactInformation(),
  formError: {},
  pageConfig: {
    formIsValid: false
  }
};

const ContactFormReducer: Reducer<IContactMeStore, any> = (state = defaultState, action:IAction) => {
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
    case ContactFormActions.setFormIsValid:
      newState = {
        ...state,
        pageConfig: {
          formIsValid: action.payload
        }
      };
      break;
  }
  return newState;
};

export default ContactFormReducer;