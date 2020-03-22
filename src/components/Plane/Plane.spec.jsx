import React from 'react';
import { render } from '@testing-library/react';
import Plane from '.';

describe('Plane', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<Plane />);
    expect(container).toMatchSnapshot();
  });
});
