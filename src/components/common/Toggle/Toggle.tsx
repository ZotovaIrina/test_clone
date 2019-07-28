import * as React from 'react';
import {v4 as uuid} from 'uuid';
import FormCell, {IFormCell} from '../FormCell/FormCell';

export interface IToggle {
  inputValue: boolean;
  formCell: IFormCell;
  onChange: (value: boolean) => void
}

export const Toggle = (props: IToggle): JSX.Element => {
  const inputId = uuid();
  return (
    <FormCell {...props.formCell}>
      <label htmlFor={inputId}>
        <input
          onChange={event => props.onChange(!props.inputValue)}
          type="checkbox"
          value={props.inputValue ? 'true' : ''}
        />
      </label>
    </FormCell>
  );
};

export default Toggle;
