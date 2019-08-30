import React from 'react';
import {Link} from 'react-router-dom';
import FlexRow from '../FlexRow/FlexRow';

const NavigationBar: React.FunctionComponent<{}> = props => {
  return(
    <FlexRow>
      <Link to={'/'}>Home</Link>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/resume'}>My Resume</Link>
      <Link to={'/contact'}>Contact Me</Link>
    </FlexRow>
  )
};

export default NavigationBar;