import React from 'react';
import ContactForm, {IContactFormProps} from '../../components/contactMe/contactForm';

const ContactMe: React.FunctionComponent<IContactFormProps> = props => {
  return (
    <>
      <h1>Contact Me</h1>
      <ContactForm
        formData={props.formData}
        formError={props.formError}
        config={props.config}
        onChange={props.onChange}
      />
    </>
  )
};

export default ContactMe;