import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button correctly', () => {
  // Renders component with props
  const { getByText } = render(
    <Button txt="Click me" style="primary" click={() => {}} ariaLabel="Click button" />
  );

  // Checks text renderization
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});
