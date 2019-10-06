import React, {useContext} from 'react';
import getConfig, {AppConfigs} from '../../../configs/getConfig';
import {MyContext} from '../../../store/language/languageContext';

export interface IText {
  textId?: string | null,
  className?: string,
  replaceConfig?: object
}

const TextComponent: React.FunctionComponent<IText> = props => {

  const language = useContext(MyContext);
  let text: any = getConfig(AppConfigs[language.language], props.textId);
  if (typeof text !== 'string') {
    text = props.textId || ''
  }
  if (props.replaceConfig) {
    const keys = Object.keys(props.replaceConfig);
    keys.map(key => {
      return text = text.toString()
        .replace(key, getConfig(AppConfigs[language.language], props.replaceConfig![key]))
    });
  }


  return (
    <>
      {text}
      {props.children ? props.children : ''}
    </>
  )

};

export default TextComponent;