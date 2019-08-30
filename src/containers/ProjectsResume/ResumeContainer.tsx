import React from 'react';
import Resume, {IResumePage} from './Resume';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {initProjects} from '../../store/resume/resumeDispatch';
import {Dispatch} from 'redux';
import IMyResume from '../../configs/resume/MyResume';
import getConfig, {AppConfigs} from '../../configs/getConfig';

const mapStateToProps = (state: IStore) => ({
  resume: getConfig(AppConfigs.myResume) as IMyResume
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
      <Resume
        resume={this.props.resume}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeContainer);
