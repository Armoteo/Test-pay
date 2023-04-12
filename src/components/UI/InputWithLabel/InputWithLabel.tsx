import TextField from '../TextField/TextField';
import Input from '../Input/Input';
import IInputWithLabel from './interfaces/IInputWithLabel';
import styles from './sass/InputWithLabel.module.scss';

const InputWithLabel = ({
  id,
  type,
  value,
  placeholder,
  styleType,
  onChange,
  onBlur,
  onKeyDown,
  onFocus,
  disabled,
  text,
  textClass,
  inputClass,
  error,
}: IInputWithLabel) => (
  <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`}>
    <TextField text={text} textClass={textClass} error={error} label />
    <Input
      id={id}
      type={type}
      value={value}
      inputClass={inputClass}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      error={error}
    />
    {error && <TextField text={error} error={error} /> }
  </div>
);

export default InputWithLabel;
