import React from 'react';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import HomePage, {IHomePage} from './HomePage';

const mapStateToProps = (state: IStore, dispatch: Dispatch) => ({
});

export class HomeContainer extends React.Component<IHomePage> {

  render(){
    return (
      <HomePage />
    );
  }
}

export default connect(
  mapStateToProps
)(HomeContainer);

