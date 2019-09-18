import lodash from 'lodash';
import configs from './config.json';

export enum AppConfigs {
  contactMe = 'contactMe',
  myResume = 'myResumeEn',
  myResumerus = 'myResumeRus',
  en = 'en',
  rus = 'rus'
}


export default function(config: AppConfigs, path?: string, updateConfig?: object): object {
  const value = path ? lodash.get(configs[config], path) : configs[config];
  if (!updateConfig || !path) {
    return value === undefined ? {} : value;
  } else {
    let newValue = lodash.assign({}, config);
    newValue = lodash.merge({}, config, updateConfig);
    return lodash.get(newValue, path) || {};
  }
}
