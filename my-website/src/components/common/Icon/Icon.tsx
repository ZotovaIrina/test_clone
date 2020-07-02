import * as React from 'react';
import {IconType} from './IconType';
import {IconStyled} from './Icon.styles';
import {Size} from '../../../style/Theme';

export interface IIcon {
  type: IconType;
  size?: Size;
}

const UseSvg: React.FunctionComponent<IIcon> = props => {
  return <use xlinkHref={`#zotova-icon-${props.type}`} />;
};

const Icon: React.FunctionComponent<IIcon> = props => {

  return (
    <IconStyled {...props}>
      <UseSvg type={props.type} />
    </IconStyled>
  );
};

export default Icon;
