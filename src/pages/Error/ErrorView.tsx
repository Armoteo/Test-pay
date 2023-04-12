import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import { NOT_FOUND } from '../../constants/httpStatusCodes';
import IErrorView from './interfaces/IErrorView';
import styles from './sass/Error.module.scss';

const ErrorView = ({ statusCode }: IErrorView) => {
  const { t } = useTranslation('error');

  return (
    <Layout>
      <div className={styles.errorBody}>
        {t(statusCode === NOT_FOUND ? 'pageNotFound' : 'internalServerError')}
      </div>
    </Layout>
  );
};

export default ErrorView;
