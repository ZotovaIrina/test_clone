import ContactMe, {IContactMePage} from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {submitContactMeForm, updateContactMeForm} from '../../store/contactForm/contactFormDispatch';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';
import React from 'react';
import {setLanguage} from '../../store/language/languageDispatch';

const mapStateToProps = (state: IStore) => ({
  language: {
    language:  state.language.language,
    onChange:  setLanguage
  },
  contactForm: {
    formData: state.contactForm.formData,
    formError: state.contactForm.formError,
    pageConfig: state.contactForm.pageConfig,
    config: getConfig(AppConfigs.contactMe) as IContactMe,
    onChange: updateContactMeForm,
    onSubmit: submitContactMeForm
  }
});

export class ContactContainer extends React.Component<IContactMePage> {

  render(){
    return (
      <ContactMe
        contactForm={this.props.contactForm}
        language={this.props.language}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ContactContainer);