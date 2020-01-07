import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ScrollBottom from 'react-scroll-to-bottom'
import { withSocket } from '../SocketIO'
import Message from './Message'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: '#f4f4f4',
    height: 'calc(100vh - 104px)',
  }
}))

function Messages ({ socket }) {
  const classes = useStyles()
  const [messages, setMessages] = useState([])
  useEffect(() => {
    socket.socketInstance().on('PREV_MESSAGES', (messages) => {
      console.log(messages)
      setMessages(messages)
    })
  })

  useEffect(() => {
    socket.socketInstance().on('message', (message) => {
      setMessages([...messages, message])
    })
  })

  console.log('render Messages')
  return (
    <ScrollBottom className={classes.root}>
      { messages.map(message => <Message key={message.timestamp} {...message} />) }
    </ScrollBottom>
  )
}

export default withSocket(Messages)
