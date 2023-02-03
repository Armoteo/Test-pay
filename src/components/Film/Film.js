import PropTypes from 'prop-types';
import styles from './sass/Film.module.scss';

const Film = ({ film }) => {
  return (
    <div>
      <p>
        {film.Title}
      </p>
      <img className={styles.appBanner} src={film.Poster} alt={film.Title} />
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
  }).isRequired
};

export default Film;
