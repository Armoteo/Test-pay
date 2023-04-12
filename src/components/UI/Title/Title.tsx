import ITitle from './interfaces/ITitle';
import styles from './sass/Title.module.scss';

const Title = ({ children, styleType } :ITitle) => (
  <h1 className={`${styles.title} ${styleType ? styles[styleType] : ''}`}>
    {children}
  </h1>
);

export default Title;
