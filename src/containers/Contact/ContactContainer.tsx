import ContactMe from './ContactMe';
import store, {IStore} from '../../store/Store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {editNameAction} from '../../store/contactForm/contactFormActions';

const mapStateToProps = (state: IStore) => ({
  form: state.contactForm
});

const mapDispatchToProps = () => ({
  onChange: (value: string | null) => store.dispatch(editNameAction(value))
});

const ContactContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactMe) as any
);

export default ContactContainer;