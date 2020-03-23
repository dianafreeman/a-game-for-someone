import React from 'react';
import { render } from '@testing-library/react';
import Grid from '.';

describe('Grid', () => {

  it('renders without crashing, matches snapshot', () => {
    const { container } =  render(<Grid />)

    expect(container).toMatchSnapshot();

  });
});
