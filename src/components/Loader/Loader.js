import styles from './sass/Loader.module.scss';
import loader from '../../assets/images/loader.svg';

const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
