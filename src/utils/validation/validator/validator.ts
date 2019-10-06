import {IValidationResult} from './ValidationResult';
import {isNullOrUndefined} from '../../isNullOrUndefined';
import {ValidationMessage} from '../generateValidationMessage/ValidationMessage';

export interface IValidatorMessages {
  validMessage?: string;
  invalidMessage?: string;
}

export enum ValidationType {
  number = 'number',
  string = 'string',
  date = 'date',
  phone = 'phone'
}

export interface IValidatorConfig {
  includedIn?: any[];
  label?: string;
  required: boolean;
  validationType: keyof typeof ValidationType;
  messages?: IValidatorMessages;
}

export default function validator(value: any, config: IValidatorConfig): IValidationResult {

  let invalidMessage: string = (config.messages && config.messages.invalidMessage) ?
    config.messages.invalidMessage : ValidationMessage.invalid;

  const validateType = (data: any, dataType: string): boolean => {
    return typeof data === dataType;
  };

  let validationResult: IValidationResult = {
    message: null,
    isValid: true
  };

  if (isNullOrUndefined(value)) {
    validationResult = {
      message: config.required ? ValidationMessage.required : null,
      isValid: !config.required
    };
  } else {
    let isValid: boolean = true;
    switch (config.validationType) {
      case ValidationType.number:
        isValid = validateType(value, 'number');
        break;
      case ValidationType.phone:
        isValid = validateType(value, 'number') && value.toString().length === 10;
        if (!isValid) {
          invalidMessage = ValidationMessage.phone;
        }
        break;
      case ValidationType.string:
        isValid = validateType(value, 'string');
        if (isValid && config.required) {
          isValid = value.toString() !== '';
          if (!isValid) {
            invalidMessage = ValidationMessage.required;
          }
        }
        break;
      case ValidationType.date:
        isValid = value instanceof Date && !isNaN(value.getTime());
        if (!isValid) {
          invalidMessage = ValidationMessage.date;
        }
    }
    validationResult = {
      message: isValid ? null : invalidMessage,
      isValid
    };
  }

  return validationResult;
}