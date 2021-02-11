import { render, screen } from '@testing-library/react';
import SendChecksTable from './SendChecksTable';

const setup = () => render(<SendChecksTable />);

describe('SendChecksTable', () => {
  it('renders table', () => {
    setup();
    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument();
    const tableHeaders = screen.getAllByRole('columnheader')
    expect(tableHeaders.map((header) => header.innerHTML)).toEqual(['Company', 'Address', 'Amount', '', ''])
  });
})
