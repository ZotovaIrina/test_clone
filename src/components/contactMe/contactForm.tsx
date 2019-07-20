import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';
import PhoneInput from '../common/PhoneInput/PhoneInput';
import {ValidationType} from '../../utils/validator/validator';

export interface IContactFormProps {
  formData: ContactInformation;
  formError: object;
  onChange: (property: string, propertyType: ValidationType, newValue: any) => void;
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {

  const onFormChange = (property: string, propertyType: ValidationType, value: any | null) => {
    props.onChange(property, propertyType, value);
  };
  return (
    <>
      <TextInput
        label={'Name'}
        isRequired={true}
        inputValue={props.formData.name}
        errorText={props.formError['name']}
        onChange={value => onFormChange('name', ValidationType.string, value)}/>
      <TextInput
        label={'Company'}
        isRequired={true}
        inputValue={props.formData.companyName}
        errorText={props.formError['companyName']}
        onChange={value => onFormChange('companyName', ValidationType.string, value)}/>
      <PhoneInput
        formCell={
          {
            label: 'Phone',
            errorText: props.formError['phone']
          }
        }
        onChange={value => onFormChange('phone', ValidationType.number, value)}
        onBlur={(event, value) => onFormChange('phone', ValidationType.phone, value)}
        inputValue={props.formData.phone}/>
      <TextInput
        label={'Email'}
        isRequired={true}
        inputValue={props.formData.email}
        errorText={props.formError['email']}
        onChange={value => onFormChange('email', ValidationType.string, value)}/>
      <AreaInput
        label={'Message'}
        isRequired={true}
        inputValue={props.formData.message}
        errorText={props.formError['message']}
        onChange={value => onFormChange('message', ValidationType.string, value)}/>
    </>
  )
};

export default ContactForm;