import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';
import IServerSideProps from '../src/interfaces/IServerSideProps';

const Home = () => (
  <HomeView />
);

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
