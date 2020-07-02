import store from '../Store';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Store} from 'redux';
import {setVisibilityFilterAction} from './resumeActions';

export const setProjectsFilter = (filter: string | null) => {

  (store.dispatch as ThunkDispatch<Store, void, AnyAction>)((dispatch) => {
    dispatch(setVisibilityFilterAction(filter));
  });
};