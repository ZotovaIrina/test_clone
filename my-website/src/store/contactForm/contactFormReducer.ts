import {Reducer} from 'redux';
import ContactInformation from '../../types/ContactInformation';
import {ContactFormActions} from './contactFormActions';
import {IAction} from '../../types/Action';
import {fetchError, fetchInProcess, fetchSuccess, IFetch, initFetch} from '../../types/Fetch';


export interface IContactFormPageConfig {
  formIsValid: boolean;
  focusedField?: string;
  sendEmail: IFetch;
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
    formIsValid: false,
    focusedField: undefined,
    sendEmail: initFetch()
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
          ...state.pageConfig,
          formIsValid: action.payload
        }
      };
      break;
    case ContactFormActions.setFormFocusedField:
      newState = {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          focusedField: action.payload
        }
      };
      break;
    case ContactFormActions.setSendEmailInProcess:
      newState = {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          sendEmail: fetchInProcess()
        }
      };
      break;
    case ContactFormActions.setSendEmailSuccess:
      newState = {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          sendEmail: fetchSuccess()
        }
      };
      break;
    case ContactFormActions.setSendEmailError:
      newState = {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          sendEmail: fetchError(action.payload)
        }
      };
      break;
    case ContactFormActions.setDefaultForm:
      newState = {
        ...defaultState
      };
      break;
  }
  return newState;
};

export default ContactFormReducer;