import * as React from 'react';

export interface IFormCell {
  /** Additional CSS class. */
  className?: string;
  /** Message to display when the form is in an error state. */
  errorText?: string | null;
  /** Hint text content. */
  hintText?: string | null;
  /** Highlights the form as a required field. */
  isRequired?: boolean;
  /** Label text. */
  label?: string | null;
  /** Adds additional margins to the form. */
  wrapInput?: boolean;
}

/**
 * This component wraps a input with proper spacing, along with support for a label, hint text, and validation state.
 */
export default class FormCell extends React.Component<IFormCell> {
  public static defaultProps: Partial<IFormCell> = {
    wrapInput: true
  };

  public render() {
    const { children, className, errorText, hintText, isRequired, label, wrapInput } = this.props;
    const combinedClassName = ['form-cell', wrapInput ? null : 'form-cell--margin', errorText ? 'form-cell--error' : null, className].filter(c => !!c).join(' ');
    return (
      <div className={combinedClassName}>
        {label ? <span className="form-cell__label">{label + (isRequired ? ' *' : '')}</span> : null}
        {children}
        {errorText ? <span className="form-cell__error">{errorText}</span> : null}
        {hintText ? <span className="form-cell__hint">{hintText}</span> : null}
      </div>
    );
  }
}
