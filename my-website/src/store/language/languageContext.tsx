import React, {useState} from 'react';
import {Language} from '../../types/Languages';

export const defaultLanguageValue = Language.english;

export const MyContext = React.createContext({
  language: defaultLanguageValue,
  setLanguage: (value: Language) => {}
});


const ContextProvider: React.FunctionComponent<{}> = props => {
  const [language, changeLanguage] = useState(defaultLanguageValue);

  const setLanguage = (value: Language) => {
    changeLanguage(value);
  };

  return(
    <MyContext.Provider value={{language, setLanguage}}>
      {props.children}
    </MyContext.Provider>
  )
};

export default ContextProvider;
