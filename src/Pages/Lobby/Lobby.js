import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withSocket } from '../../components/SocketIO'
import Messages from '../../components/ChatRoom/Messages'

const useStyles = makeStyles(theme => ({
  root: {
    background: '#f0f0f0',
    height: 'calc(100vh - 64px)',
    boxSizing: 'border-box',
    display: 'grid'
  },
  sidebar: {
    padding: theme.spacing(2),
  }
}))


function Lobby() {
  const classes = useStyles()

  console.log('render Lobby')
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <h1>Lobby</h1>
      </div>
      <div className={classes.chat}>
        <Messages />
      </div>
    </div>
  )
}

export default Lobby