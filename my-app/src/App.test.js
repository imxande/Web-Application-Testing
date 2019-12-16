import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from 'react-testing-library'



test('renders without crashing', () => {
  render(<App />);
});

test('dashboard found', () => {
  const { getByText } = render(<App />);

  // looking for strikes in the DOM
  getByText(/Strikes/i);
});
