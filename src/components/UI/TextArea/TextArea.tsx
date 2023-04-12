import ITextArea from './interfaces/ITextArea';
import styles from './sass/TextArea.module.scss';

const TextArea = ({
  value, textAreaClass, placeholder, onChange, disabled,
}: ITextArea) => (
  <textarea
    className={`${styles.textarea} ${textAreaClass ? styles[textAreaClass] : ''}`}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
  />
);

export default TextArea;
