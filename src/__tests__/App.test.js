import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { renderWithProviders } from '../utils/test-utils';
import store from '../store';

describe('test suite', () => {
  test('make sure main page loads', async () => {
    renderWithProviders(<App />, { store });

    expect(
      screen.getByText('Welcome to Anecdotes Central.')
    ).toBeInTheDocument();
  });
});
