import PropTypes from 'prop-types';
import styles from './sass/Title.module.scss';

const Title = ({ text }) => {
  return (
    <h1 className={styles.appTitle}>
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
