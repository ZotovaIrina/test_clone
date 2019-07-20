import React, {useState} from 'react';
import FormCell, {IFormCell} from '../FormCell/FormCell';
import NumberFormat, {NumberFormatValues} from 'react-number-format';

interface IPhoneInput {
  formCell?: IFormCell,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: number | null) => void;
  onChange: (value: number | null) => void;
  inputValue: number | null
}

const PhoneInput: React.FunctionComponent<IPhoneInput> = props => {

  const [inputValue, setValue] = useState<number | undefined>(props.inputValue || undefined);

  const onValueChange = (value: NumberFormatValues) => {
    setValue(value.floatValue);
    props.onChange(value.floatValue ? value.floatValue : null );
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(event, inputValue ? inputValue : null );
    }
  };

  return <FormCell {...props.formCell}>
    <NumberFormat
      allowNegative={false}
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
