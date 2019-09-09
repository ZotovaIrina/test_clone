import React from 'react';
import getImage, {ImageType} from '../../../utils/getImage';
import {Language} from '../../../types/Languages';

export interface IChooseLanguage {
  language: Language,
  onChange: (newLanguage: Language) => void
}


const ChooseLanguage: React.FunctionComponent<IChooseLanguage> = props => {
  return (
    <>
      <img src={getImage('russia-flag.png', ImageType.icon)} onClick={ e => props.onChange(Language.russian)} alt="russian"/>
      <img src={getImage('usa-flag.png', ImageType.icon)} onClick={ e => props.onChange(Language.english)} alt="usa"/>
    </>
  )
};

export default ChooseLanguage;