import React from 'react';
import {Route, Router} from 'react-router';
import * as H from 'history';
import HomeContainer from './containers/Home/HomeContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import ProjectsContainer from './containers/Projects/ProjectsContainer';
import {Provider} from 'react-redux';
import store from './store/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={H.createBrowserHistory()}>
        <>
          <Route path={'/'} component={HomeContainer} exact/>
          <Route path={'/projects'} component={ProjectsContainer} exact/>
          <Route path={'/contact'} component={ContactContainer} exact/>
        </>
      </Router>
    </Provider>
  );
};

export default App;
