import { useTranslation } from 'next-i18next';
import styles from './sass/Footer.module.scss';

function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      {`${t('poweredBy')} ${t('onix')}`}
    </footer>
  );
}

export default Footer;
