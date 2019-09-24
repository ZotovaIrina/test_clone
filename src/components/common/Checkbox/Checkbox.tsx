import * as React from 'react';
import FormCell, {IFormCell} from '../FormCell/FormCell';
import FlexRow from '../FlexRow/FlexRow';
import {CheckboxStyled} from './Checkbox.styles';
import {TextTranslate} from '../Text/Text.styled';

export interface ICheckbox {
  inputValue: boolean;
  formCell: IFormCell;
  onChange: (value: boolean) => void
}

export const Checkbox = (props: ICheckbox): JSX.Element => {
  return (
    <FormCell  errorText={props.formCell.errorText}>
      <FlexRow data-id="Checkbox-formCell" verticalAlign={'normal'}>
        <TextTranslate textId={props.formCell.label}>{props.formCell.isRequired ? ' *' : ''}</TextTranslate>
          <CheckboxStyled
            onChange={event => props.onChange(!props.inputValue)}
            type="checkbox"
            value={props.inputValue ? 'true' : ''}
          />
      </FlexRow>
    </FormCell>
  );
};

export default Checkbox;
