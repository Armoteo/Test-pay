import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import styles from './sass/Home.module.scss';

const HomeView = () => {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <div className={styles.page}>
        {t('nextJs')}
      </div>
    </Layout>
  );
};

export default HomeView;
