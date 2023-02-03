import React from 'react';
import { render } from '../../settings/test-utils';
import Page from '../../../src/layout/Page/Page';

describe('<Page />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <Page />
    );
  });

  test('Page component should render', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });
});
