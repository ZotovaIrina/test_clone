/*tslint:disable:no-console*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestRenderer from 'react-test-renderer';
import FormCell from './FormCell';

function findLabelNode(testRenderer: TestRenderer.ReactTestRenderer) {
  return testRenderer.root.find(instance => {
    const className = instance.props.className || '';
    return className.indexOf('form-cell__label') >= 0;
  });
}

function findErrorNode(testRenderer: TestRenderer.ReactTestRenderer) {
  return testRenderer.root.find(instance => {
    const className = instance.props.className || '';
    return className.indexOf('form-cell__error') >= 0;
  });
}

function findHintNode(testRenderer: TestRenderer.ReactTestRenderer) {
  return testRenderer.root.find(instance => {
    const className = instance.props.className || '';
    return className.indexOf('form-cell__hint') >= 0;
  });
}

// TESTS

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormCell />, div);
});

it('should pass through className property', () => {
  const testRenderer = TestRenderer.create(<FormCell className="test" />);
  expect(testRenderer.toJSON()!.props.className).toMatch(/test/);
});

it('should render label node based on label property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell label="TEST" />);
  const labelNode = findLabelNode(testRenderer);
  expect(labelNode.props.children).toBe('TEST');
});

it('should render asterisk based on isRequired property is true and label property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell label="TEST" isRequired={true} />);
  const labelNode = findLabelNode(testRenderer);
  expect(labelNode.props.children).toBe('TEST *');
});

it('should not render asterisk based on isRequired property is false and label property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell label="TEST" isRequired={false} />);
  const labelNode = findLabelNode(testRenderer);
  expect(labelNode.props.children).not.toMatch(/\*$/);
});

it('should render error text node if errorText property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell errorText="TEST" />);
  const errorNode = findErrorNode(testRenderer);
  expect(errorNode.props.children).toBe('TEST');
});

it('should render error className based on errorText property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell errorText="TEST" />);
  expect(testRenderer.toJSON()!.props.className).toMatch(/form-cell--error/);
});

it('should render hint text node if hintText property is set', () => {
  const testRenderer = TestRenderer.create(<FormCell hintText="TEST" />);
  const hintNode = findHintNode(testRenderer);
  expect(hintNode.props.children).toBe('TEST');
});
