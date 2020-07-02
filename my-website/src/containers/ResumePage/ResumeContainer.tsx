import React, {useContext} from 'react';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IMyResume from '../../configs/resume/MyResume';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import ResumePage, {IResumePage} from './ResumePage';
import {MyContext} from '../../store/language/languageContext';
import {Language} from '../../types/Languages';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export const ResumeContainer:React.FC<IResumePage> = props => {
  const context = useContext(MyContext);

  const resume = getConfig(context.language === Language.english ? AppConfigs.myResume : AppConfigs.myResumerus) as IMyResume;

    return (
      <ResumePage resume={resume} />
    );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeContainer);
