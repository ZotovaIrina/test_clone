import validator from './validator/validator';
import getBooleanByConfig from '../getBooleanByConfig';
import {IValidationResult} from './validator/ValidationResult';

export interface IAllFieldsValidation {
  valid: boolean;
  validationMessages: object;
}

const allFieldsIsValidation = (data: object, config: object): IAllFieldsValidation => {
  const properties = Object.keys(data);

  let fieldValidation: IValidationResult;
  const validationResult: IAllFieldsValidation = {
    valid: true,
    validationMessages: {}
  };

  properties.forEach(property => {

    fieldValidation = validator(data[property], {
      validationType: config[property].validationType,
      label: config[property].formCell.label,
      required: getBooleanByConfig(config[property].formCell.isRequired, {
        formData: data
      })
    });

    if (!fieldValidation.isValid) {
      validationResult.valid = false;
      validationResult.validationMessages[property] = fieldValidation.message
    }
  });

  return validationResult;
};

export default allFieldsIsValidation;
