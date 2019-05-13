// import React from 'react';
import ContactMe from './ContactMe';
import {IStore} from '../../store/Store';
import {connect} from 'react-redux';

// const ContactContainer: React.FunctionComponent<{}> = props => {
// console.log(props);
//   return (
//     <ContactMe/>
//   )
// };

const mapStateToProps = (state: IStore) => ({
  form: state.contactForm
});


export default connect(mapStateToProps)(ContactMe);