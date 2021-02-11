import { render, screen } from '@testing-library/react';
import SendChecksTable from './SendChecksTable';
import reactQueryWrapper from '../testUtils/reactQueryWrapper'

const setup = () => {
  const Wrapper = reactQueryWrapper()
  render(<Wrapper><SendChecksTable /></Wrapper>)
};

describe('SendChecksTable', () => {
  it('renders table', () => {
    setup();
    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument();
    const tableHeaders = screen.getAllByRole('columnheader')
    expect(tableHeaders.map((header) => header.innerHTML)).toEqual(['Company', 'Address', 'Amount', '', ''])
  });
})
