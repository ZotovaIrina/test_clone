import React from 'react';
import ContactForm, {IContactFormProps} from '../../components/contactMe/contactForm';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {IChooseLanguage} from '../../components/common/ChooseLanguage/ChooseLanguage';

export interface IContactMePage {
  contactForm: IContactFormProps,
  language: IChooseLanguage
}

const ContactMe: React.FunctionComponent<IContactMePage> = props => {
  console.log(props);
  return (
    <>
      <NavigationBar {...props.language}/>
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