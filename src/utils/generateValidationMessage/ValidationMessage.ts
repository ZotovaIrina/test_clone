export enum ValidationMessage {
  required = '$label can not be blank',
  number = '$label is invalid',
  min = '$label cannot be less than $additionalValue',
  max = '$label] cannot be more than $additionalValue',
  date = 'Invalid Date',
  phone = 'Invalid phone number',
  email = 'Invalid email',
  invalid = '$label is invalid'
}
