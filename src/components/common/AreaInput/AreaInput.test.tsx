import { mount } from 'enzyme';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import * as React from 'react';
import { create } from 'react-test-renderer';
import { attachHookableNode, removeHookableNode } from '../../test-utilities/handleHookableNode';
import AreaInput, { IAreaInputProps } from './AreaInput';

expect.extend({ toMatchImageSnapshot });

describe('AreaInput', () => {
  /**
   * Functional test suite utilitizes
   * enzyme.mount(..., {attachTo}) and attachHookableNode(...)
   * to ensure full DOM structure and React lifecycle avalability.
   * This will execute as mutch as possible from component
   * lifecycle which will force errors to surface.
   *
   * Not using enzyme.shallow by purpouse on components.
   * Would use it for views consisted of multiple compoments
   * to confirm that general structure is in place.
   * Checking if html structure of component is in place
   * should be handled during development and then sealed with snapshots.
   *
   * Also not testing for falsy scenarios like providing wrong
   * prop value. This is to be picked up on component level
   * with TypeScript and PropTypes.
   */
  describe('Functional', () => {
    const nodeName = 'hookableNode';
    let hookableNode: HTMLDivElement;

    beforeEach(() => {
      hookableNode = attachHookableNode(nodeName);
    });

    afterEach(() => {
      removeHookableNode(hookableNode);
    });

    it('uses props.autoFocus', () => {
      const props: IAreaInputProps = {
        autoFocus: true,
        inputValue: 'initialValue',
        onBlur: jest.fn()
      };

      const comp = mount(<AreaInput {...props} />, { attachTo: window[nodeName] });
      const textarea = comp.find('textarea').instance();
      expect(textarea).toBe(document.activeElement);
      comp.unmount();
    });

    it('calls props.onBlur', () => {
      const props: IAreaInputProps = {
        autoFocus: true,
        inputValue: 'initialValue',
        onBlur: jest.fn()
      };

      const comp = mount(<AreaInput {...props} />, { attachTo: window[nodeName] });
      const textarea = (comp.find('textarea').instance() as unknown) as HTMLTextAreaElement;
      textarea.blur();
      expect(props.onBlur).toBeCalledTimes(1);
      comp.unmount();
    });

    it('calls props.onChange', () => {
      const props: IAreaInputProps = {
        inputValue: 'initialValue',
        onChange: jest.fn()
      };

      const comp = mount(<AreaInput {...props} />);
      const textarea = comp.find('textarea');
      const instance = (textarea.instance() as unknown) as HTMLTextAreaElement;
      expect(instance.value).toBe('initialValue');
      textarea.simulate('change', { target: { value: 'newValue' } });
      expect(instance.value).toBe('newValue');
      expect(props.onChange).toBeCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith('newValue', null);
      comp.unmount();
    });

    it('should call getInputRef when set', () => {
      const callback = jest.fn();
      mount(<AreaInput getInputRef={callback}/>);
      expect(callback).toHaveBeenCalledWith(expect.anything());
    });


  });

  /**
   * Snapshot tests is to confirm if component was rendered properly
   * and to "seal" it. If snapshot changes it forces dev to reevaluate output.
   *
   * Provide scenarios with:
   * - only required props
   * - all props
   * - mix of above when mixed scenarios are possible
   *
   * It uses create(...) from react-test-renderer
   * to provide almost clean HTML output for easy debug.
   */
  describe('Snapshot', () => {
    it('required props', () => {
      const props: IAreaInputProps = {
        inputValue: 'inputValue'
      };

      const tree = create(<AreaInput {...props} />);
      expect(tree).toMatchSnapshot();
    });

    it('all props', () => {
      const props: IAreaInputProps = {
        autoFocus: true,
        className: 'className',
        errorText: 'errorText',
        hintText: 'hintText',
        inputValue: 'inputValue',
        isRequired: true,
        label: 'label',
        onBlur: () => void 0,
        onChange: () => void 0,
        placeHolder: 'placeholder',
        rows: 1,
        showErrors: true,
        wrapInput: true
      };
      const tree = create(<AreaInput {...props} />);
      expect(tree).toMatchSnapshot();
    });
  });

  /**
   * UnitJS test suite tests only single pure javascript functions.
   */
  // describe('UnitJS', () => {
  //     it(('someFunctionName should return ... for ...') => {
  //         const opts: ISomeFunctionName = {};
  //         const expected = ...;
  //         const result = someFunctionName(opts);
  //         expect(result).toBe(expected);
  //     })
  // });
});
