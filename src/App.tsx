import React from 'react';
import {Route, Router} from 'react-router';
import * as H from 'history';
import HomeContainer from './containers/Home/HomeContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import ProjectsContainer from './containers/Projects/ProjectsContainer';
import {Provider} from 'react-redux';
import store from './store/Store';
import ResumeContainer from './containers/ResumePage/ResumeContainer';
import './style/fonts.scss';
import {ThemeProvider} from 'styled-components';
import {theme} from './style/Theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={H.createBrowserHistory()}>
        <ThemeProvider theme={theme}>
        <>
          <Route path={'/'} component={HomeContainer} exact/>
          <Route path={'/projects'} component={ProjectsContainer} exact/>
          <Route path={'/resume'} component={ResumeContainer} exact/>
          <Route path={'/contact'} component={ContactContainer} exact/>
        </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
