import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {submitContactMeForm, updateContactMeForm} from '../../store/contactForm/contactFormDispatch';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';
import React from 'react';
import {IContactFormProps} from '../../components/contactMe/contactForm';

const mapStateToProps = (state: IStore) => ({
  formData: state.contactForm.formData,
  formError: state.contactForm.formError,
  pageConfig: state.contactForm.pageConfig,
  config: getConfig(AppConfigs.contactMe) as IContactMe
});

const mapDispatchToProps = () => ({
  onChange: updateContactMeForm,
  onSubmit: submitContactMeForm
});

export class ContactContainer extends React.Component<IContactFormProps> {

  render(){
    return (
      <ContactMe
        formData={this.props.formData}
        formError={this.props.formError}
        pageConfig={this.props.pageConfig}
        config={this.props.config}
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactContainer);