import React from 'react';
import { render } from '@testing-library/react';
import Grid from '.';

describe('Grid', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<Grid size={6} />);
    expect(container).toMatchSnapshot();
  });
  describe.only('size from grid', () => {
    it('renders without crashing, matches snapshot', () => {
      const size = 7;
      const thing = render(<Grid size={size} />);

      expect(thing).toEqual(6);
    });
  });
});
