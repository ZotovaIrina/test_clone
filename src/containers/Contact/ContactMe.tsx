import React from 'react';
import ContactForm, {IContactFormProps} from '../../components/contactMe/contactForm';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

export interface IContactMePage {
  contactForm: IContactFormProps
}

const ContactMe: React.FunctionComponent<IContactMePage> = props => {
  console.log(props);
  return (
    <>
      <NavigationBar/>
      <h1>Contact Me</h1>
      <ContactForm
        formData={props.contactForm.formData}
        formError={props.contactForm.formError}
        config={props.contactForm.config}
        pageConfig={props.contactForm.pageConfig}
        onChange={props.contactForm.onChange}
        onSubmit={props.contactForm.onSubmit}
      />
    </>
  )
};

export default ContactMe;