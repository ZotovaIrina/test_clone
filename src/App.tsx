import React from 'react';
import {Route, Router} from 'react-router';
import * as H from 'history';
import HomeContainer from './containers/Home/HomeContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import ProjectsContainer from './containers/Progects/ProjectsContainer';
import {Provider} from 'react-redux';
import store from './store/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={H.createBrowserHistory()}>
        <>
          <Route path={'/'} component={HomeContainer}/>
          <Route path={'/projects'} component={ProjectsContainer}/>
          <Route path={'/contact'} component={ContactContainer}/>
        </>
      </Router>
    </Provider>
  );
};

export default App;
