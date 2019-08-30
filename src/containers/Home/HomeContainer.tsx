import React from 'react';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

const HomeContainer: React.FunctionComponent<{}> = props => {
  return (
    <>
      <NavigationBar/>
      <h1>Home</h1>
    </>
  )
};

export default HomeContainer;