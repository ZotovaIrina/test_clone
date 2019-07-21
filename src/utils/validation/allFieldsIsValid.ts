import validator from './validator/validator';

const allFieldsIsValid = (data: object, config: object) => {
  const properties = Object.keys(data);

  let formIsValid = true;
  let fieldIsValid: boolean;

  properties.forEach(property => {

    fieldIsValid = validator(data[property], {
      validationType: config[property].validationType,
      required: config[property].formCell.isRequired,
      label: config[property].formCell.label
    }).isValid;

    if (!fieldIsValid) {
      formIsValid = false;
    }

  });

  return formIsValid;
};

export default allFieldsIsValid;
