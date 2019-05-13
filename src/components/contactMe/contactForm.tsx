import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';

interface IContactFormProps {
  data: ContactInformation
  onChange: (newValue: string | null) => void
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {

  return (
    <>
      <TextInput
        label={'Name'}
        isRequired={true}
        inputValue={props.data.name}
        onChange={props.onChange}/>
      <TextInput
        label={'Company'}
        inputValue={props.data.companyName}
        onChange={props.onChange}/>
      <TextInput
        label={'Email'}
        inputValue={props.data.email}
        onChange={props.onChange}/>
      <AreaInput
        label={'Message'}
        inputValue={props.data.message}
        onChange={props.onChange}/>
    </>
  )
};

export default ContactForm;