import {combineReducers, createStore} from 'redux';
import ContactFormStore from './contactForm/contactFormStore';
import ContactInformation from '../types/ContactInformation';

export interface IStore {
  contactForm: ContactInformation
}

const reducer = combineReducers({
  contactForm: ContactFormStore
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log('change', store.getState());
});

export default store;