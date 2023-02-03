import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJokeAsync } from '../../store/jokes/slice';
import HomeView from './HomeView';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJokeAsync());
  }, []);

  return (
    <HomeView />
  );
};

export default Home;
