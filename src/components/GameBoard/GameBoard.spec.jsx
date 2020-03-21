import React from 'react';
import { render } from '@testing-library/react';
import GameBoard from '.';

describe('GameBoard', () => {
  it('renders without crashing, matches snapshot', () => {
    const { container } = render(<GameBoard />);
    expect(container).toMatchSnapshot();
  });
});
