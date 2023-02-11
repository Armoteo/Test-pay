import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toggleLocaleAsync } from '../../store/translates/slice';
import Title from '../../components/Title/Title';
import styles from './sass/Header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const locale = useSelector(({ translates }) => translates.locale, shallowEqual);
  return (
    <header className={styles.appHeader}>
      <Title text={t('welcome')} />
      <Link to="/" className={styles.headerLink}>
        {t('home')}
      </Link>
      <Link to="/stripe" className={styles.headerLink}>
        {t('stripe')}
      </Link>
      <Link to="/paypal" className={styles.headerLink}>
        {t('paypal')}
      </Link>
      <button
        className={styles.toggleLanguage}
        data-testid="toggle-language-button"
        type="button"
        onClick={() => dispatch(toggleLocaleAsync())}
      >
        {locale}
      </button>
    </header>
  );
};

export default Header;
