import React from 'react';
import Icon from '../../common/Icon/Icon';
import {IconType} from '../../common/Icon/IconType';
import {Button, ButtonType} from '../../common/Button/Button.styles';
import {Size} from '../../../style/Theme';
import GridRow from '../../common/GridRow/GridRow';

const GetResume: React.FC<{}> = props => {

  return (
    <GridRow columns={2} data-id="GridRow" columnWidth={'min-content'} justifyContent={'end'}>
      <Button type={ButtonType.secondary}><Icon type={IconType.download} size={Size.regular}/></Button>
      <Button type={ButtonType.secondary}><Icon type={IconType.print} size={Size.regular}/></Button>
    </GridRow>
  );
};

export default GetResume;