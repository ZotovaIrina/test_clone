import {Reducer} from 'redux';
import ContactInformation from '../../types/ContactInformation';
import {ContactFormActions} from './contactFormActions';
import {IAction} from '../../types/Action';

const ContactFormStore: Reducer<ContactInformation, any> = (state = new ContactInformation(), action:IAction) => {
  let newState = {...state};

  switch (action.type as ContactFormActions) {
    case ContactFormActions.EDIT_VALUE:
      newState = {
        ...state,
        ...action.payload
      };
      break;
  }
  return newState;
};

export default ContactFormStore