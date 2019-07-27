import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {submitContactMeForm, updateContactMeForm} from '../../store/contactForm/contactFormDispatch';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';

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

const ContactContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactMe) as any
);

export default ContactContainer;