import React from 'react';
import ContactForm, {IContactFormProps} from '../../components/contactMe/contactForm';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

const ContactMe: React.FunctionComponent<IContactFormProps> = props => {
  return (
    <>
      <NavigationBar/>
      <h1>Contact Me</h1>
      <ContactForm
        formData={props.formData}
        formError={props.formError}
        config={props.config}
        pageConfig={props.pageConfig}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </>
  )
};

export default ContactMe;