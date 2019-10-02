import axios from 'axios';
import ContactInformation from '../types/ContactInformation';

export class SendEmail {

  public static send = (data: ContactInformation): Promise<object> => {
    const emailData = {
      service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
      template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      user_id: process.env.REACT_APP_EMAIL_USER_ID,
      template_params: {
        fromName: data.name,
        companyName: data.companyName,
        phoneNumber: data.phone,
        email: data.email,
        contactByPhone: data.contactByPhone,
        message: data.message,
      }
    };

    return axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData)
  };
}