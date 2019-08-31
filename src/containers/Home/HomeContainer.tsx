import React from 'react';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import HomePage from './HomePage';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export class HomeContainer extends React.Component<{}> {

  render(){
    return (
      <HomePage />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

