import React from 'react';
import { render } from '@testing-library/react';
import COMPONENT_NAME from '.';

describe('COMPONENT_NAME', () => {

  it('renders without crashing, matches snapshot', () => {
    const { container } =  render(<COMPONENT_NAME />)

    expect(container).toMatchSnapshot();

  });
});
