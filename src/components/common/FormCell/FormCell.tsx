import * as React from 'react';
import {TextTranslate} from '../Text/Text.styled';

export interface IFormCell {
  errorText?: string | null;
  placeHolder?: string;
  isRequired?: boolean;
  disabled?: boolean;
  label?: string | null;
}

const FormCell:React.FC<IFormCell> = props =>  {
    return (
      <div>
        {props.label ? <TextTranslate textId={props.label}>{props.isRequired ? ' *' : ''}</TextTranslate> : null}
        {props.children}
        {props.errorText ? <TextTranslate textId={props.errorText} /> : null}
      </div>
    );
}

export default FormCell;