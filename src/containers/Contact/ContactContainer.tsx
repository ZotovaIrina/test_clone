import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {updateContactMeForm} from '../../store/contactForm/contactFormMiddleware';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IContactMe from '../../configs/formConfigs/contactMe';

const mapStateToProps = (state: IStore) => ({
  formData: state.contactForm.formData,
  formError: state.contactForm.formError,
  config: getConfig(AppConfigs.contactMe) as IContactMe
});

const mapDispatchToProps = () => ({
  onChange: updateContactMeForm
});

const ContactContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactMe) as any
);

export default ContactContainer;