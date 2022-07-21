import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import {} from '.';

describe('< />', () => {
  it('should render', () => {
    renderTheme(<>Children</>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
