import capitalize from '../../capitalize';
import {isNullOrUndefined} from '../../isNullOrUndefined';
import {ValidationMessage} from './ValidationMessage';

export default function generateValidationMessage(msgKey: keyof typeof ValidationMessage, label?: string, additionalValue?: any): string {
  let message = '';
  const messagesWithoutLabel: Array<keyof typeof ValidationMessage> = ['date', 'phone', 'email'];
  const messagesWithAdditionalValue: Array<keyof typeof ValidationMessage> = ['min', 'max'];

  message = ValidationMessage[msgKey]
    .replace('$label', label ? capitalize(label) : 'Field')
    .replace('$additionalValue', additionalValue ? additionalValue : 'value');

  if (!label && !messagesWithoutLabel.includes(msgKey)) {
    console.error(`Label is required for ${msgKey} validation message`);
  }

  if (messagesWithAdditionalValue.includes(msgKey) && isNullOrUndefined(additionalValue)) {
    console.error(`Additional value is required for ${msgKey} validation message`);
  }
  return message;
}