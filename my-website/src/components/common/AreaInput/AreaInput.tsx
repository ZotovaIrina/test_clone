import * as React from 'react';
import FormCell, { IFormCell } from '../FormCell/FormCell';
import {useState} from 'react';
import {useRef} from 'react';
import {AreaInputStyled} from './AreaInput.styled';
import {useEffect} from 'react';

export interface IAreaInputProps extends IFormCell {
  formCell: IFormCell;
  autoFocus?: boolean;
  inputValue: string | null;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (newValue: string | null) => void;
  rows?: number;
}
const AreaInput:React.FC<IAreaInputProps> = props => {
  const [inputValue, setValue] = useState(props.inputValue || '');
  const textInput = useRef<HTMLInputElement>(null);

  const doAutoFocus = (autofocus: boolean | undefined) => {
    if(textInput.current && autofocus) {
      textInput.current.focus()
    }
  };

  doAutoFocus(props.autoFocus);

  useEffect(() => {
    setValue(props.inputValue || '');
  }, [props.inputValue]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    props.onChange(value);
    setValue(e.target.value)
  };
    return (
      <FormCell {...props.formCell}>
        <AreaInputStyled
          errorText={props.formCell.errorText}
          onBlur={props.onBlur}
          onChange={onChange}
          placeholder={props.formCell.placeHolder}
          readOnly={props.formCell.disabled}
          rows={props.rows || 4}
          value={inputValue}
        />
      </FormCell>
    );

};

export default AreaInput;
