import ITextWithLink from './interfaces/ITextWithLink';
import TextField from '../TextField/TextField';
import LinkItem from '../LinkItem/LinkItem';
import styles from './sass/TextWithLink.module.scss';

const TextWithLink = ({
  url, text, textLink, linkClass, textClass,
}: ITextWithLink) => (
  <div className={styles.container}>
    <TextField text={text} textClass={textClass} />
    <LinkItem url={url || ''} styleType={linkClass}>{textLink}</LinkItem>
  </div>
);

export default TextWithLink;
