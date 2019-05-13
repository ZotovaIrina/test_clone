import {Reducer} from 'redux';
import ContactInformation from '../../types/ContactInformation';

const ContactFormStore: Reducer<ContactInformation, any> = (state = new ContactInformation(), action) => {
  const newState = {...state};

  switch (action.type) {
    case 'EDIT_NAME':
      newState.name = action.payload;
      break;
    default: break;
  }
  return newState;
};

export default ContactFormStore