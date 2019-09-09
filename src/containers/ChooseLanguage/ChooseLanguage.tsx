import React, {useContext} from 'react';
import getImage, {ImageType} from '../../utils/getImage';
import {MyContext} from '../../store/language/languageContext';
import {Language} from '../../types/Languages';

export interface IChooseLanguage {
}


const ChooseLanguage: React.FunctionComponent<IChooseLanguage> = props => {

  const language = useContext(MyContext);

  return (
    <>
      <img src={getImage('russia-flag.png', ImageType.icon)} onClick={e => language.setLanguage(Language.russian)}  alt="russian"/>
      <img src={getImage('usa-flag.png', ImageType.icon)} onClick={e => language.setLanguage(Language.english)} alt="usa"/>
    </>
  )
};

export default ChooseLanguage;