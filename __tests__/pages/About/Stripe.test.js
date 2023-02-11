import { render } from '../../settings/test-utils';
import Stripe from '../../../src/pages/Stripe/Stripe';

describe('Stripe />', () => {
  test('should render Stripe component', () => {
    const { asFragment } = render(<Stripe />);
    expect(asFragment(<Stripe />)).toMatchSnapshot();
  });
});
