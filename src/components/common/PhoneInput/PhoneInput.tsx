import React, {useState} from 'react';
import FormCell, {IFormCell} from '../FormCell/FormCell';
import  {NumberFormatValues} from 'react-number-format';
import {PhoneInputStyled} from './PhoneInput.styled';

interface IPhoneInput {
  formCell: IFormCell,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (value: number | null) => void;
  autoFocus?: boolean;
  inputValue: number | null
}

const PhoneInput: React.FunctionComponent<IPhoneInput> = props => {

  const [inputValue, setValue] = useState<number | undefined>(props.inputValue || undefined);

  const onValueChange = (value: NumberFormatValues) => {
    setValue(value.floatValue);
    if(value.value.length === 10 || value.value.length === 0) {
      props.onChange(value.floatValue ? value.floatValue : null );
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onChange(inputValue || null);
    if (props.onBlur) {
      props.onBlur(event );
    }
  };

  return <FormCell {...props.formCell}>
    <PhoneInputStyled
      allowNegative={false}
      errorText={props.formCell.errorText}
    decimalScale={0}
    disabled={props.formCell!.disabled || false}
    displayType={'input'}
    fixedDecimalScale={true}
    format={'(###) ###-####'}
    isNumericString={true}
    mask={'#'}
    onBlur={onBlur}
    onFocus={props.onFocus}
    onValueChange={onValueChange}
    placeholder={'(###) ###-####'}
    thousandSeparator={''}
    value={inputValue}
    />
  </FormCell>
};

export default PhoneInput;
