import React, {useContext} from 'react';
import getConfig, {AppConfigs} from '../../../configs/getConfig';
import {MyContext} from '../../../store/language/languageContext';

export interface IText {
  textId?: string,
  className?: string
}

const TextComponent: React.FunctionComponent<IText> = props => {

  const language = useContext(MyContext);

  return (
    <>
      {props.textId && typeof getConfig(AppConfigs[language.language], props.textId) === 'string' ?
        `${getConfig(AppConfigs[language.language], props.textId)}${props.children ? props.children : ''}` :
        props.children
      }
    </>
  )

};

export default TextComponent;