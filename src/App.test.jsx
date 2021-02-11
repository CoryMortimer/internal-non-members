import { render, screen } from '@testing-library/react';
import App from './App';
import reactQueryWrapper from './testUtils/reactQueryWrapper'

it('renders table', () => {
  const Wrapper = reactQueryWrapper()
  render(<Wrapper><App /></Wrapper>);
  const tableElement = screen.getByRole('table')
  expect(tableElement).toBeInTheDocument();
});
