import ITextField from './interfaces/ITextField';
import styles from './sass/TextField.module.scss';

const TextField = ({
  text, textClass, children, error, label,
}: ITextField) => (
  <span
    className={`${styles.textField} 
      ${textClass ? styles[textClass] : ''} 
      ${error ? styles.error : ''}
      ${(error && label) ? styles.textLabelError : ''}`}
  >
    {text}
    {children}
  </span>
);

export default TextField;
