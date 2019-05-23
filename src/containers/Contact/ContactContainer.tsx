import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {updateContactMeForm} from '../../store/contactForm/contactFormMiddleware';

const mapStateToProps = (state: IStore) => ({
  formData: state.contactForm.formData,
  formError: state.contactForm.formError
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