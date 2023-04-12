import Link from 'next/link';
import ILink from './interfaces/ILink';
import styles from './sass/LinkItem.module.scss';

const LinkItem = ({
  as,
  url,
  styleType,
  text,
  children,
  isUseDefaultClass = true,
}: ILink) => (
  <div className={`${isUseDefaultClass ? styles.container : ''} ${styleType ? styles[styleType] : ''}`}>
    <Link href={url} as={as}>
      {text || children}
    </Link>
  </div>
);

export default LinkItem;
