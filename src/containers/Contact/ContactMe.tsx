import React from 'react';
import ContactForm, {IContactFormProps} from '../../components/contactMe/contactForm';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {ContactMePageContainer} from '../../components/contactMe/ContactMe.styled';
import GridRow from '../../components/common/GridRow/GridRow';

const ContactMe: React.FunctionComponent<IContactFormProps> = props => {

  console.log(props);
  return (
    <>
      <NavigationBar/>
      <ContactMePageContainer>
        <GridRow>
          <ContactForm
            formData={props.formData}
            formError={props.formError}
            config={props.config}
            focusedField={props.focusedField}
            submitProcess={props.submitProcess}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
        </GridRow>
      </ContactMePageContainer>
    </>
  )
};

export default ContactMe;