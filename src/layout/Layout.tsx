import Header from '../components/Header/Header';
import ILayout from './interfaces/ILayout';
import styles from './sass/Layout.module.scss';

const Layout = ({ children }: ILayout) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.wrapper}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
