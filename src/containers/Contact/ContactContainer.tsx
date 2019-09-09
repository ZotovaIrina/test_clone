import ContactMe, {IContactMePage} from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {submitContactMeForm, updateContactMeForm} from '../../store/contactForm/contactFormDispatch';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';
import React from 'react';

const mapStateToProps = (state: IStore) => ({
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
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ContactContainer);