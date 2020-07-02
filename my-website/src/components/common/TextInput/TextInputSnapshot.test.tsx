import * as React from 'react';
import { create } from 'react-test-renderer';

import TextInput from './TextInput';

it('renders correctly text input without label and error message', () => {
  const tree = create(<TextInput inputValue={'input value'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly required input with label and error message', () => {
  const tree = create(<TextInput inputValue={'input value'} label={'label'} isRequired={true} errorText={'Error text'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
