import * as React from 'react';
import {TextTranslate} from '../Text/Text.styled';
import {FormCellError, FormCellLabel, FormCellStyled} from './FormCell.styled';

export interface IFormCell {
  errorText?: string | null;
  placeHolder?: string;
  isRequired?: boolean;
  disabled?: boolean;
  label?: string | null;
}

const FormCell: React.FC<IFormCell> = props => {
  return (
    <FormCellStyled data-id="FormCell">
      <FormCellLabel data-id="FormCellLabel">
        {props.label ? <TextTranslate textId={props.label}>{props.isRequired ? ' *' : ''}</TextTranslate> : null}
      </FormCellLabel>
      {props.children}
      <FormCellError data-id="FormCellError">
        {props.errorText ? <TextTranslate textId={props.errorText}/> : null}
      </FormCellError>
    </FormCellStyled>
  );
}

export default FormCell;