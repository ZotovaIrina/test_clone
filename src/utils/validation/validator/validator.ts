import generateValidationMessage from '../generateValidationMessage/generateValidationMessage';
import {IValidationResult} from './ValidationResult';
import {isNullOrUndefined} from '../../isNullOrUndefined';

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
    config.messages.invalidMessage : generateValidationMessage('invalid', config.label);

  const validateType = (data: any, dataType: string): boolean => {
    return typeof data === dataType;
  };

  let validationResult: IValidationResult = {
    message: null,
  };

  if (isNullOrUndefined(value)) {
    validationResult = {
      message: config.required ? generateValidationMessage('required', config.label) : null,
    };
  } else {
    let isValid: boolean = true;
    switch (config.validationType) {
      case ValidationType.number:
        isValid = validateType(value, 'number');
        break;
      case ValidationType.phone:
        isValid = validateType(value, 'number') && value.toString().length === 10;
        console.log(isValid, value.toString().length, validateType(value, 'number'));
        if (isNullOrUndefined(value) && config.required) {
          isValid = false;
          invalidMessage = generateValidationMessage('required', config.label);
        }
        break;
      case ValidationType.string:
        isValid = validateType(value, 'string');
        if (isValid && config.required) {
          isValid = value.toString() !== '';
          if (!isValid) {
            invalidMessage = generateValidationMessage('required', config.label);
          }
        }
        break;
      case ValidationType.date:
        isValid = value instanceof Date && !isNaN(value.getTime());
        if (!isValid) {
          invalidMessage = generateValidationMessage('date', config.label);
        }
    }
    validationResult = {
      message: isValid ? null : invalidMessage
    };
  }

  return validationResult;
}