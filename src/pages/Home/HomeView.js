import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchJokeAsync } from '../../store/jokes/slice';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import styles from './sass/Home.module.scss';

const HomeView = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoading, joke, error } = useSelector(({ jokes }) => jokes);
  return (
    <div>
      <p className={styles.appIntro}>
        {t('homePage')}
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>{error || joke}</p>
        </div>
      )}
      <Button
        title={t('newJoke')}
        buttonClass={styles.updateJoke}
        handleClick={() => dispatch(fetchJokeAsync())}
      />
    </div>
  );
};

export default HomeView;
