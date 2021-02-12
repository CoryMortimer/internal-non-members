import { useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useMutation } from 'react-query'
import { sendCheck } from '../resources/sentChecks'

const SendButton = ({ nonMember: { id, name, address, amount }, onSent }) => {
  const { isLoading, mutateAsync } = useMutation(sendCheck)
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const sendCheckToNonMember = () => {
    mutateAsync(id)
      .then(() => {
        onSent()
        handleClose()
      })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">Send</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="send-dialog-title"
        aria-describedby="send-dialog-description"
      >
        <DialogTitle id="send-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="send-dialog-description">
            Do you want to send {amount} to {name} at {address}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendCheckToNonMember} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SendButton
