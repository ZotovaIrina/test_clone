import * as PropTypes from 'prop-types';
import * as React from 'react';
import FormCell, { IFormCell } from '../FormCell/FormCell';

export interface IAreaInputProps extends IFormCell {
  formCell: IFormCell;
  autoFocus?: boolean;
  inputValue: string | null;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (newValue: string | null) => void;
  rows?: number;
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
    inputValue: ''
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
      <FormCell {...this.props.formCell}>
        <textarea
          className="faux-text-area"
          onBlur={this.props.onBlur}
          onChange={this.onChange}
          placeholder={this.props.formCell.placeHolder}
          readOnly={this.props.formCell.disabled}
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
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  public doAutoFocus = (autofocus: boolean) => {
    if (autofocus && this.textInput) {
      this.textInput.focus();
    }
  };
}
