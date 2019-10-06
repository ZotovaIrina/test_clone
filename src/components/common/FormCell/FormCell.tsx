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
      {props.label ?
        <FormCellLabel data-id="FormCellLabel" textId={props.label}>
          {props.isRequired ? ' *' : ''}
        </FormCellLabel>
        : <span/>}
      {props.children}
      <FormCellError data-id="FormCellError">
        {props.errorText ?
          <TextTranslate
            textId={props.errorText}
            replaceConfig={{
              '$label': props.label
            }}
          /> : null}
      </FormCellError>
    </FormCellStyled>
  );
};

export default FormCell;