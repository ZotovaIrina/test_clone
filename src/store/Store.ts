import {combineReducers, createStore, applyMiddleware} from 'redux';
import ContactFormReducer, {IContactMeStore} from './contactForm/contactFormReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export interface IStore {
  contactForm: IContactMeStore
}

const reducer = combineReducers({
  contactForm: ContactFormReducer
});

const errorLog = (store: any) => (next: any) => (action: any) => {
  try {
    next(action)
  } catch (e) {
    console.error(e);
  }
};

const middleware = applyMiddleware(thunk, logger, errorLog);

const store = createStore(reducer, {}, middleware);

export default store;