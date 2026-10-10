import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /yoga kasireddy/i })).toBeInTheDocument();
});
