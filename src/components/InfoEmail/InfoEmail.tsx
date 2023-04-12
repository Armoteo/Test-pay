import TextField from '../UI/TextField/TextField';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import ImageItem from '../UI/ImageItem/ImageItem';
import { IInfoEmail } from './interfaces/InfoEmail';
import styles from './sass/InfoEmail.module.scss';

const InfoEmail = ({
  title, text, btnTitle, textClass, src, handleClick,
}: IInfoEmail) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {src && <ImageItem src={src} height={130} width={130} />}
      <Title>{title}</Title>
      <TextField text={text} textClass={textClass} />
      <Button handleClick={handleClick}>{btnTitle}</Button>
    </div>
  </div>
);

export default InfoEmail;
