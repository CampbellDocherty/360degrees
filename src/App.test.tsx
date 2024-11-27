import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the app renders', () => {
  test('it shows the title', () => {
    render(<App />);
    screen.getByText('60° sonic self portraits');
  });
});