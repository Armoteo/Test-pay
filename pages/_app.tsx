import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { AppProps } from 'next/app';
import { useStore } from '../src/store/store';
import IStaticProps from '../src/interfaces/IStaticProps';
import IPageProps from '../src/pages/App/interfaces/IPageProps';
import '../src/pages/App/sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { initialReduxState } = pageProps as IPageProps;
  const store = useStore(initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(MyApp);
