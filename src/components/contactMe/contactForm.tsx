import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';

interface IContactFormProps {
  data: ContactInformation
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {
  const onChange = (newValue: string | null) => {
    console.log(newValue);
  };

  return (
    <>
      <TextInput
        label={'Name'}
        isRequired={true}
        inputValue={props.data.name}
        onChange={onChange}/>
      <TextInput
        label={'Company'}
        inputValue={props.data.companyName}
        onChange={onChange}/>
      <TextInput
        label={'Email'}
        inputValue={props.data.email}
        onChange={onChange}/>
      <AreaInput
        label={'Message'}
        inputValue={props.data.message}
        onChange={onChange}/>
    </>
  )
};

export default ContactForm;