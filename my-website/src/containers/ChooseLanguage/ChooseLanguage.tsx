import React, {useContext} from 'react';
import getImage, {ImageType} from '../../utils/getImage';
import {MyContext} from '../../store/language/languageContext';
import {Language} from '../../types/Languages';
import {ImageButton} from '../../components/common/Button/Button.styles';
import {ChangeLanguageContainer} from './ChangeLanguageContainer.styled';

export interface IChooseLanguage {
}


const ChooseLanguage: React.FunctionComponent<IChooseLanguage> = props => {

  const language = useContext(MyContext);

  return (
    <ChangeLanguageContainer data-id="ChangeLanguageContainer">
      <ImageButton backgroundSrc={getImage('russia-flag.png', ImageType.icon)}
              onClick={e => language.setLanguage(Language.russian)}/>
      <ImageButton backgroundSrc={getImage('usa-flag.png', ImageType.icon)}
              onClick={e => language.setLanguage(Language.english)}/>
    </ChangeLanguageContainer>
  )
};

export default ChooseLanguage;