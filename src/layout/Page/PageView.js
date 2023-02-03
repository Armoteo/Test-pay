import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './sass/Page.module.scss';

const PageView = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageView;
