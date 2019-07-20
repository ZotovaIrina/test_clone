import * as React from 'react';
import FormCell, {IFormCell} from '../FormCell/FormCell';

export interface ITextInputProps {
  formCell: IFormCell;
  inputValue: string | null;
  autoFocus?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (option: string | null) => void;
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
    inputValue: null,
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
      <FormCell {...this.props.formCell}>
        <input
          type={'text'}
          ref={this.getInputRef}
          onChange={this.onChange}
          onBlur={this.props.onBlur}
          placeholder={this.props.formCell.placeHolder}
          readOnly={this.props.formCell.disabled}
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
    this.props.onChange(value);
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
