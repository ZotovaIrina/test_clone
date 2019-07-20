import generateValidationMessage from './generateValidationMessage';

describe('GenerateValidationMessage', () => {
  it('Return invalid phone validation message', () => {
    const message = generateValidationMessage('phone');
    expect(message).toEqual('Invalid phone number');
  });

  it('Return validation message with label', () => {
    const message = generateValidationMessage('required', 'value');
    expect(message).toEqual('Value can not be blank');
  });

  it('Return validation message without label', () => {
    console.error = jest.fn();
    const message = generateValidationMessage('required');
    expect(console.error).toBeCalledWith('Label is required for required validation message');
    expect(message).toEqual('Field can not be blank');
  });

  it('Return validation message with label and additional value', () => {
    const message = generateValidationMessage('min', 'date', '03/21/2019');
    expect(message).toEqual('Date cannot be less than 03/21/2019');
  });

  it('Return validation message without additional value', () => {
    console.error = jest.fn();
    const message = generateValidationMessage('min', 'date');
    expect(console.error).toBeCalledWith('Additional value is required for min validation message');
    expect(message).toEqual('Date cannot be less than value');
  });
});
