import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button', () => {
  render(<Button>test</Button>);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});
