import { useTranslation } from 'next-i18next';
import styles from './sass/Header.module.scss';
import LinkItem from '../UI/LinkItem/LinkItem';
import LogoForm from '../UI/LogoForm/LogoForm';
import headerLinks from '../../constants/headerLinks';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header className={styles.appHeader}>
      <LogoForm stylesType="wrapperLogo" />
      <div className={styles.linksContainer}>
        {headerLinks.map((item, index) => (
          <LinkItem
            url={item.url}
            styleType={item.style}
            key={[item.title, index].join('_')}
          >
            {t(`${item.title}`)}
          </LinkItem>
        ))}
      </div>

    </header>
  );
};

export default Header;
