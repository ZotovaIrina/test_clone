import lodash from 'lodash';
import {isNullOrUndefined} from './isNullOrUndefined';

const getBooleanByConfig = (path: boolean | string | undefined | null, dataObject: object): boolean => {
  if (isNullOrUndefined(path)) {
    return false
  } else {
    return typeof path === 'boolean' ? path : !!lodash.get(dataObject, path!)
  }
};

export default getBooleanByConfig;