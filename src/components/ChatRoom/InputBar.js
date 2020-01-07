import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  input: {
    width: '100%'
  }
}))

const InputBar = ({ sendMessage }) => {
  const classes = useStyles()
  const [message, setMessage] = useState('')

  const send = (message) => {
    sendMessage(message)
    setMessage('')
  }

  const sendOnEnter = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      send(message)
    }
  }

  return (
    <form>
      <Input
        className={classes.input}
        placeholder="Type message..."
        onKeyPress={sendOnEnter}
        value={message}
        onChange={e => setMessage(e.target.value)}
        endAdornment={<Button onClick={() => send(message)}><SendIcon /></Button>}
      />
    </form>
  )
}

export default InputBar