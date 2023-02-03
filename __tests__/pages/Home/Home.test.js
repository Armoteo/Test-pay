import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { act } from '@testing-library/react';
import { render } from '../../settings/test-utils';
import HomePage from '../../../src/pages/Home/Home';

describe('<Home />', () => {
  let wrapper;
  beforeEach(async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ value: 'mock data' }));
    fetchMock.mockRejectOnce(JSON.stringify('mock error'));
    wrapper = await act(() => render(<HomePage />));
  });

  test('should render Home component', async () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});
