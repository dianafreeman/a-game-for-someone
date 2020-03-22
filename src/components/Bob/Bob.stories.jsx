import React from 'react';
import { action } from '@storybook/addon-actions';
import Bob from '.';

export const byDefault = () => <Bob />;

export default {
  title: 'Bob',
  component: Bob,
};
