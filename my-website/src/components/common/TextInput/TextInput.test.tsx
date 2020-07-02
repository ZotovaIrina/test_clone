/*tslint:disable:no-console*/
import * as React from 'react';

import {mount} from 'enzyme';
import TextInput from './TextInput';
import FormCell from "../FormCell/FormCell";

// TESTS

it('should pass through className property', () => {
  const textInput = mount(<TextInput className="test"/>);
  expect(textInput.hasClass('test')).toBe(true);
});

describe('isRequired', () => {
  it('should pass through isRequired property', () => {
    const textInput = mount(<TextInput isRequired={true}/>);
    expect(textInput.find(FormCell).prop('isRequired')).toBe(true);
  });

  it('should pass through isRequired property', () => {
    const textInput = mount(<TextInput isRequired={false}/>);
    expect(textInput.find(FormCell).prop('isRequired')).toBe(false);
  });
});

describe('label', () => {
  it('should pass through label property', () => {
    const textInput = mount(<TextInput label={'Test label'}/>);
    expect(textInput.find(FormCell).prop('label')).toBe('Test label');
  });

  it('should pass through isRequired property', () => {
    const textInput = mount(<TextInput label={undefined}/>);
    expect(textInput.find(FormCell).prop('label')).toBe(undefined);
  });
});

describe('placeHolder', () => {
  it('should pass through placeHolder property', () => {
    const textInput = mount(<TextInput placeHolder={'Test placeholder'}/>);
    expect(textInput.find('input').prop('placeholder')).toBe('Test placeholder');
  });

  it('should pass through isRequired property', () => {
    const textInput = mount(<TextInput label={undefined}/>);
    expect(textInput.find('input').prop('label')).toBe(undefined);
  });
});

describe('readOnly', () => {

  it('should pass through readOnly property', () => {
    const textInput = mount(<TextInput readOnly={true}/>);
    expect(textInput.find('input').prop('readOnly')).toBe(true);
  });

  it('should pass through readOnly property', () => {
    const textInput = mount(<TextInput readOnly={false}/>);
    expect(textInput.find('input').prop('readOnly')).toBe(false);
  });

  it('should pass through readOnly property', () => {
    const textInput = mount(<TextInput/>);
    expect(textInput.find('input').prop('readOnly')).toBe(undefined);
  });
});

it('should have error styles if error text is not empty', () => {
  const textInput = mount(<TextInput errorText={'error'}/>);
  expect(textInput.find('.form-cell--error').length).toBe(1);
});

describe('isRequired', () => {
  it('should have inputValue', () => {
    const textInput = mount(<TextInput inputValue={'test input value'}/>);
    expect(textInput.find('input').prop('value')).toBe('test input value');
  });

  it('should have inputValue', () => {
    const textInput = mount(<TextInput inputValue={null}/>);
    expect(textInput.find('input').prop('value')).toBe('');
  });
});

it('should call getInputRef when set', () => {
  const callback = jest.fn();
  mount(<TextInput getInputRef={callback}/>);
  expect(callback).toHaveBeenCalledWith(expect.anything());
});

it('should call onBlur when set', () => {
  const callback = jest.fn();
  const textInput = mount(<TextInput onBlur={callback}/>);
  textInput.find('input').simulate('blur');
  expect(callback).toHaveBeenCalled();
});