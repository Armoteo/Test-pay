import IInput from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input = ({
  id, type, value, placeholder, inputClass, onChange, onBlur, onKeyDown, onFocus, disabled, error,
} :IInput) => (
  <input
    id={id}
    type={type}
    value={value}
    className={`${styles.input} ${inputClass ? styles[inputClass] : ''} ${error ? styles.error : ''}`}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    disabled={disabled}
    onKeyDown={onKeyDown}
    onFocus={onFocus}
  />
);

export default Input;
