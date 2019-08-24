import lodash from 'lodash';

export enum AppConfigs {
  contactMe = 'contactMe',
  myResume = 'myResume'
}
const configs = {
  contactMe: require('./formConfigs/contactMe.json'),
  myResume: require('./resume/MyResume.json')
};

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
