import React from 'react';
import {Route, Router} from 'react-router';
import * as H from 'history';
import HomeContainer from './containers/Home/HomeContainer';

const App: React.FC = () => {
  return (
      <Router history={H.createBrowserHistory()}>
        <Route path={'/'} component={HomeContainer}/>
      </Router>
  );
};

export default App;
