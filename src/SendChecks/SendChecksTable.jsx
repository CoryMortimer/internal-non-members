import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SendChecksTable = () => {
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
        <TableRow>
          <TableCell component="th" scope="row">
            The Name
          </TableCell>
          <TableCell>333 test</TableCell>
          <TableCell>$10.00</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell>Send</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SendChecksTable
