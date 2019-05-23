import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';

export interface IContactFormProps {
  formData: ContactInformation;
  formError: object;
  onChange: (property: string, newValue: any) => void;
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {

  const onFormChange = (property: string, value: string | null) => {
    props.onChange(property, value);
  };
  return (
    <>
      <TextInput
        label={'Name'}
        isRequired={true}
        inputValue={props.formData.name}
        errorText={props.formError['name']}
        onChange={value => onFormChange('name', value)}/>
      <TextInput
        label={'Company'}
        isRequired={true}
        inputValue={props.formData.companyName}
        errorText={props.formError['companyName']}
        onChange={value => onFormChange('companyName', value)}/>
      <TextInput
        label={'Email'}
        isRequired={true}
        inputValue={props.formData.email}
        errorText={props.formError['email']}
        onChange={value => onFormChange('email', value)}/>
      <AreaInput
        label={'Message'}
        isRequired={true}
        inputValue={props.formData.message}
        errorText={props.formError['message']}
        onChange={value => onFormChange('message', value)}/>
    </>
  )
};

export default ContactForm;