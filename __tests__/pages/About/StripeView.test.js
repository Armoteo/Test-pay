import i18next from 'i18next';
import { render } from '../../settings/test-utils';
import StripeView from '../../../src/pages/Stripe/StripeView';

describe('<StripeView />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<StripeView title={i18next.t('aboutPage')} />);
  });

  test('should render StripeView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('StripeView component should have passed title', () => {
    const { getByText } = wrapper;
    expect(getByText(i18next.t('aboutPage'))).toBeInTheDocument();
  });
});
