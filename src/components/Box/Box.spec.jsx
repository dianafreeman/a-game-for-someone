import React from 'react';
import { render } from '@testing-library/react';
import Box from '.';

describe('Box', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<Box />);
    expect(container).toMatchSnapshot();
  });
});
