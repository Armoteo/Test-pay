import fetchMock from 'jest-fetch-mock';
import i18next from 'i18next';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../src/App';
import setupStore from '../src/store/store';

describe('<App />', () => {
  let wrapper;
  beforeEach(async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ value: 'mock data' }));
    fetchMock.mockRejectOnce(JSON.stringify('mock error'));
    wrapper = await act(async () => render(
      <Provider store={setupStore()}>
        <App />
      </Provider>
    ));
  });

  test('should render App component', async () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  test('App component should contain About and Home pages', () => {
    const { getAllByText } = wrapper;
    const Home = getAllByText(i18next.t('home'));
    const AboutHome = getAllByText(i18next.t('about'));

    expect(Home[0]).toBeInTheDocument();
    expect(AboutHome[0]).toBeInTheDocument();
  });
});
