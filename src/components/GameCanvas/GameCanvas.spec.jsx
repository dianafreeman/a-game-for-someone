import React from 'react';
import { render } from '@testing-library/react';
import GameCanvas from '.';

describe('GameCanvas', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<GameCanvas />);
    expect(container).toMatchSnapshot();
  });
});
