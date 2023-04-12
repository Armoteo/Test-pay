import IButton from './interfaces/IButton';
import styles from './sass/Button.module.scss';

const Button = ({
  id,
  label,
  submit,
  children,
  handleClick,
  styleButton,
  activeClass,
  disabledButton,
}: IButton) => (
  <button
    id={id}
    type={submit ? 'submit' : 'button'}
    disabled={disabledButton}
    onClick={handleClick}
    className={`
      ${styles.button} ${styleButton ? styles[styleButton] : ''}
      ${activeClass ? styles[activeClass] : ''}
    `}
  >
    {children}
    {label}
  </button>
);

export default Button;
