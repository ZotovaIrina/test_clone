import * as PropTypes from 'prop-types';
import * as React from 'react';
import FormCell, { IFormCell } from '../FormCell/FormCell';

export interface IAreaInputProps extends IFormCell {
  /** Specifies is the textarea should automatically get focus. It also works after initializing the component using the imperative approach 'false -> true'. */
  autoFocus?: boolean;
  /** The value attribute of underlying textarea. */
  inputValue: string | null;
  /** A callback triggered when focus is removed. */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** A callback fired when the value prop changes. */
  onChange?: (newValue: string | null, error?: string | null) => void;
  /** Text that will appear in an empty input. */
  placeHolder?: string;
  /** Specifies the visible number of lines in underlying textarea. */
  rows?: number;
  /** Visually highlights the component as in error. */
  showErrors?: boolean;
  /** Switches the input to read only which prevents editing the contents. */
  readOnly?: boolean;
  /** This callback exposes the input reference / DOM node to parent components. */
  getInputRef?: (elem: HTMLTextAreaElement) => void;
}

interface IAreaInputState {
  value: string;
}

/**
 * The HTML textarea with a label and error messaging.
 */
export default class AreaInput extends React.Component<IAreaInputProps, IAreaInputState> {
  public static defaultProps: Partial<IAreaInputProps> = {
    inputValue: '',
    showErrors: true
  };

  public static propTypes = {
    autoFocus: PropTypes.bool,
    inputValue: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
    rows: PropTypes.number,
    showErrors: PropTypes.bool
  };

  public state: IAreaInputState = {
    value: this.props.inputValue || ''
  };

  public textInput: HTMLTextAreaElement | null = null;

  public componentWillReceiveProps(nextProps: IAreaInputProps) {
    if (nextProps.autoFocus && nextProps.autoFocus !== this.props.autoFocus) {
      this.doAutoFocus(nextProps.autoFocus);
    }

    if (nextProps.inputValue !== this.state.value) {
      this.setState({ value: nextProps.inputValue || '' });
    }
  }

  public componentDidMount() {
    if (this.props.autoFocus) {
      this.doAutoFocus(this.props.autoFocus);
    }
  }

  public render() {
    return (
      <FormCell className={this.props.className} errorText={this.props.errorText} isRequired={this.props.isRequired} label={this.props.label}>
        <textarea
          className="faux-text-area"
          onBlur={this.props.onBlur}
          onChange={this.onChange}
          placeholder={this.props.placeHolder}
          readOnly={this.props.readOnly}
          ref={this.getInputRef}
          rows={this.props.rows}
          value={this.state.value}
        />
      </FormCell>
    );
  }

  private getInputRef = (input: HTMLTextAreaElement) => {
    this.textInput = input;
    if (this.props.getInputRef) {
      this.props.getInputRef(input);
    }
  };

  public onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let errorMessage: string | null = null;
    if (this.props.isRequired && !e.target.value && this.props.showErrors) {
      errorMessage = `${this.props.label} cannot be blank`;
    }
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value, errorMessage);
    }
  };

  public doAutoFocus = (autofocus: boolean) => {
    if (autofocus && this.textInput) {
      this.textInput.focus();
    }
  };
}
