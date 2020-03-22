import React from 'react';
import { render } from '@testing-library/react';
import Bob from '.';

describe('Bob', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<Bob />);

    expect(container).toMatchSnapshot();
  });
});
