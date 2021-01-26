import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expected error', () => {
  render(<App />);
  const linkElement = screen.getByText(/Error/i);
  expect(linkElement).toBeInTheDocument();
});
