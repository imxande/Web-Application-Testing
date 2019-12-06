import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from 'react-testing-library'



test('renders without crashing', () => {
  render(<App />);
});

test('dashboard found', () => {
  const { getByText } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByText(/Dashboard/i);
});
