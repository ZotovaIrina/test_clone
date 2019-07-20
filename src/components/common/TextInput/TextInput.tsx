import * as React from 'react';
import FormCell from '../FormCell/FormCell';

export interface ITextInputProps {
  /** The value attribute of input. */
  inputValue: string | null;
  /** Message to display when the input is in an error state. When this is present, also visually highlights the component as in error. */
  errorText?: string | null;
  /** Specifies is the textarea should automatically get focus. It also works after initializing the component using the imperative approach 'false -> true'. */
  autoFocus?: boolean;
  /** Highlights the input as a required field (does also perform additional validation). */
  isRequired?: boolean;
  /** This label appears above the input. */
  label?: string;
  /** Text that will appear in an empty input. */
  placeHolder?: string;
  /** A callback triggered when focus is removed. */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** A callback fired when the value prop changes. */
  onChange: (option: string | null, error?: string | null) => void;
  /** Switches the input to read only which prevents editing the contents. */
  readOnly?: boolean;
  /** This callback exposes the input reference / DOM node to parent components. */
  getInputRef?: (elem: HTMLInputElement) => void;
}

interface ITextInputState {
  inputValue: string;
}

/**
 * The HTML input with a label and error messaging.
 */
export default class TextInput extends React.Component<ITextInputProps, ITextInputState> {
  public static defaultProps: Partial<ITextInputProps> = {
    errorText: null,
    inputValue: null,
    isRequired: false,
    placeHolder: ''
  };

  public readonly state: ITextInputState = {
    inputValue: this.props.inputValue || ''
  };
  public textInput: HTMLInputElement | null = null;

  public componentWillReceiveProps(nextProps: ITextInputProps) {
    if (nextProps.autoFocus && nextProps.autoFocus !== this.props.autoFocus) {
      this.doAutoFocus(nextProps.autoFocus);
    }

    if (nextProps.inputValue !== this.state.inputValue) {
      this.setState({inputValue: nextProps.inputValue || ''});
    }
  }

  public componentDidMount() {
    if (this.props.autoFocus) {
      this.doAutoFocus(this.props.autoFocus);
    }
  }

  public render() {
    return (
      <FormCell
        label={this.props.label}
        isRequired={this.props.isRequired}
        errorText={this.props.errorText}
      >
        <input
          className={'faux-input'}
          type={'text'}
          ref={this.getInputRef}
          onChange={this.onChange}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeHolder}
          readOnly={this.props.readOnly}
          value={this.state.inputValue}
        />
      </FormCell>
    );
  }

  private getInputRef = (input: HTMLInputElement) => {
    this.textInput = input;
    if (this.props.getInputRef) {
      this.props.getInputRef(input);
    }
  };

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    const error = this.props.isRequired && value === null ? `${this.props.label} cannot be blank` : null;
    this.props.onChange(value, error);
    this.setState({
      inputValue: e.target.value
    });
  };

  private doAutoFocus = (autofocus: boolean) => {
    if (autofocus && this.textInput) {
      this.textInput.focus();
    }
  };
}
