import Link from 'next/link';
import styles from './sass/Header.module.scss';
import listHeader from '../../lists/headerLink';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperLink}>
        {listHeader.map((item, index) => (
          <Link
            as={item.as}
            href={item.url}
            key={[item.name, index].join('_')}
          >
            <span className={styles.link}>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
