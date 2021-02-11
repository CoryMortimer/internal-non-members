import { render, screen } from '@testing-library/react';
import App from './App';

it('renders table', () => {
  render(<App />);
  const tableElement = screen.getByRole('table')
  expect(tableElement).toBeInTheDocument();
});
