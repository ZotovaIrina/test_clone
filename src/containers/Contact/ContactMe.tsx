import React from 'react';
import ContactInformation from '../../types/ContactInformation';
import ContactForm from '../../components/contactMe/contactForm';

interface IContactMeProps {
  form: ContactInformation
}

const ContactMe: React.FunctionComponent<IContactMeProps> = props => {
  return (
    <>
      <h1>Contact Me</h1>
      <ContactForm data={props.form}/>
    </>
  )
};

export default ContactMe;