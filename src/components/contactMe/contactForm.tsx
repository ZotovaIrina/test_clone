import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';

interface IContactFormProps {
  data: ContactInformation
  onChange: (newValue: object) => void
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {

  const onFormChange = (property: string, value: string | null) => {
    props.onChange(
      {[property]: value}
      )
  };
  return (
    <>
      <TextInput
        label={'Name'}
        isRequired={true}
        inputValue={props.data.name}
        onChange={value => onFormChange('name', value)}/>
      <TextInput
        label={'Company'}
        inputValue={props.data.companyName}
        onChange={value => onFormChange('companyName', value)}/>
      <TextInput
        label={'Email'}
        inputValue={props.data.email}
        onChange={value => onFormChange('email', value)}/>
      <AreaInput
        label={'Message'}
        inputValue={props.data.message}
        onChange={value => onFormChange('message', value)}/>
    </>
  )
};

export default ContactForm;