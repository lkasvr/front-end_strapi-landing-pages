import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render tow column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
