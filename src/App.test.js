import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevLens title', () => {
  render(<App />);
  const titleElement = screen.getByText(/DevLens/i);
  expect(titleElement).toBeInTheDocument();
});
