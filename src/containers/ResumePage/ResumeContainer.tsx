import React from 'react';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {initProjects} from '../../store/resume/resumeDispatch';
import {Dispatch} from 'redux';
import IMyResume from '../../configs/resume/MyResume';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import ResumePage, {IResumePage} from './ResumePage';
import {setLanguage} from '../../store/language/languageDispatch';

const mapStateToProps = (state: IStore) => ({
  resume: getConfig(AppConfigs.myResume) as IMyResume,
  language: {
    language:  state.language.language,
    onChange:  setLanguage
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export class ResumeContainer extends React.Component<IResumePage> {
  constructor(props: IResumePage) {
    super(props);
    initProjects();
  }

  render(){
    return (
      <ResumePage resume={this.props.resume} language={this.props.language} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeContainer);
