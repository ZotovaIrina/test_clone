import React from 'react';
import Icon from '../../common/Icon/Icon';
import {IconType} from '../../common/Icon/IconType';

const GetResume: React.FC<{}> = props => {

  return (
    <div>
      <Icon type={IconType.download}/>
      <Icon type={IconType.print}/>
    </div>
  );
};

export default GetResume;