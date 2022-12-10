import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import styles from './sass/PracticePageView.module.scss';

function PracticePageView() {
  const { t } = useTranslation('practicePage');

  return (
    <Layout>
      <div className={styles.page}>
        {t('hello')}
      </div>
    </Layout>
  );
}

export default PracticePageView;
