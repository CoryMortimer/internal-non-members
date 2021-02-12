import { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useQuery } from 'react-query'
import { getNonMembers } from '../resources/nonMembers'
import { convertCentsToDollarString } from '../utils/currency'

const SendChecksTable = () => {
  const [page, setPage] = useState(1)
  const { isLoading, data } = useQuery(['nonMembers', page], () => getNonMembers(page));

  if (isLoading) {
    return null
  }

  const { data: nonMembers } = data

  return (
    <Table aria-label="send checks table">
      <TableHead>
        <TableRow>
          <TableCell>Company</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell />
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {nonMembers.map(({ id, address, name, amount }) => {
          const formattedCurrency = convertCentsToDollarString(amount)
          return (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{formattedCurrency}</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Send</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
};

export default SendChecksTable
