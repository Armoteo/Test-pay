import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { render } from '../../settings/test-utils';
import HomeView from '../../../src/pages/Home/HomeView';

describe('<HomeView />', () => {
  let wrapper;
  const mockGetJoke = jest.fn();
  const mockedJoke = 'mock data';

  beforeEach(async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ value: mockedJoke }));
    wrapper = await act(() => (
      render(
        <HomeView />
      )
    ));
  });

  test('should render HomeView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render Button component', () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('button');
    expect(Button).toBeInTheDocument();
  });

  test('on Button click should call mockGetJoke function', async () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('button');
    wrapper.store.subscribe(mockGetJoke);
    await act(async () => {
      await userEvent.click(Button);
    });
    expect(mockGetJoke).toHaveBeenCalled();
    expect(wrapper.getByText(mockedJoke)).toBeInTheDocument();
  });
});
