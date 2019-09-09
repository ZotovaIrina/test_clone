import React from 'react';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import HomePage, {IHomePage} from './HomePage';
import {setLanguage} from '../../store/language/languageDispatch';

const mapStateToProps = (state: IStore, dispatch: Dispatch) => ({
  language: {
    language:  state.language.language,
    onChange:  setLanguage
  }
});

export class HomeContainer extends React.Component<IHomePage> {

  render(){
    return (
      <HomePage language={{
        language: this.props.language.language,
        onChange: this.props.language.onChange
      }} />
    );
  }
}

export default connect(
  mapStateToProps
)(HomeContainer);

