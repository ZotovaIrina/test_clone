import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {
  setDefaultContactMeForm,
  submitContactMeForm,
  updateContactMeForm
} from '../../store/contactForm/contactFormDispatch';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';
import React from 'react';
import ContactInformation from '../../types/ContactInformation';
import {IContactFormPageConfig} from '../../store/contactForm/contactFormReducer';
import {ValidationType} from '../../utils/validation/validator/validator';

const mapStateToProps = (state: IStore) => ({
  formData: state.contactForm.formData,
  formError: state.contactForm.formError,
  pageConfig: state.contactForm.pageConfig,
  config: getConfig(AppConfigs.contactMe) as IContactMe,
  onChange: updateContactMeForm,
  onSubmit: submitContactMeForm
});

interface IContactContainer {
  formData: ContactInformation,
  formError: object,
  pageConfig: IContactFormPageConfig,
  config: IContactMe,
  onChange: (property: string, newValue: any, propertyType?: ValidationType) => void,
  onSubmit: () => void
}

export class ContactContainer extends React.Component<IContactContainer> {

  constructor(props: IContactContainer) {
    super(props);
    setDefaultContactMeForm()
  }

  render() {
    return (
      <ContactMe
        formData={this.props.formData}
        formError={this.props.formError}
        config={this.props.config}
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        submitProcess={this.props.pageConfig.sendEmail}
        focusedField={this.props.pageConfig.focusedField}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ContactContainer);