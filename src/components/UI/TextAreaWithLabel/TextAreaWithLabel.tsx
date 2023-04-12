import TextField from '../TextField/TextField';
import TextArea from '../TextArea/TextArea';
import ITextAreaWithLabel from './interfaces/ITextAreaWithLabel';
import styles from './sass/TextAreaWithLabel.module.scss';

const TextAreaWithLabel = ({
  value, placeholder, styleType, onChange, disabled, text, textClass, textAreaClass,
}: ITextAreaWithLabel) => (
  <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`}>
    <TextField text={text} textClass={textClass} />
    <TextArea
      textAreaClass={textAreaClass}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
);

export default TextAreaWithLabel;
