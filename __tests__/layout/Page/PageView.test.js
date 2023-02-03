import { render } from '../../settings/test-utils';
import PageView from '../../../src/layout/Page/PageView';

describe('<PageView />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<PageView />);
  });

  test('should render PageView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });
});
