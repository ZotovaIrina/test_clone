import * as React from 'react';
import FormCell, {IFormCell} from '../FormCell/FormCell';
import {useRef, useState} from 'react';
import {TextInputStyled} from './TextInput.styled';

export interface ITextInputProps {
  formCell: IFormCell;
  inputValue: string | null;
  autoFocus?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (option: string | null) => void;
}

const TextInput: React.FC<ITextInputProps> = props => {

  const [inputValue, setValue] = useState(props.inputValue || '');
  const textInput = useRef<HTMLInputElement>(null);

  const doAutoFocus = (autofocus: boolean | undefined) => {
    if(textInput.current && autofocus) {
      textInput.current.focus()
    }
  };

  doAutoFocus(props.autoFocus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    props.onChange(value);
    setValue(e.target.value)
  };

    return (
      <FormCell {...props.formCell}>
        <TextInputStyled
          type={'text'}
          ref={textInput}
          onChange={onChange}
          onBlur={props.onBlur}
          placeholder={props.formCell.placeHolder}
          readOnly={props.formCell.disabled}
          value={inputValue}
        />
      </FormCell>
    );
};

export default TextInput;
