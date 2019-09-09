import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import ContactFormReducer, {IContactMeStore} from './contactForm/contactFormReducer';
import thunk from 'redux-thunk';
import ResumeReducer, {IResumeStore} from './resume/resumeReducer';
import LanguageReducer, {ILanguageStore} from './language/languageReducer';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

export interface IStore {
  contactForm: IContactMeStore,
  myResume: IResumeStore,
  language: ILanguageStore
}

const reducer = combineReducers({
  contactForm: ContactFormReducer,
  myResume: ResumeReducer,
  language: LanguageReducer
});

const errorLog = (store: any) => (next: any) => (action: any) => {
  try {
    next(action)
  } catch (e) {
    console.error(e);
  }
};

const middleware = applyMiddleware(thunk, errorLog);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, {}, composeEnhancers(
  middleware
));

export default store;