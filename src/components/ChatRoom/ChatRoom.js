import React from 'react'
import Messages from './Messages'
import InputBar from './InputBar'
import { withSocket } from '../SocketIO'

const ChatRoom = ({ socket }) => {
  return (
    <React.Fragment>
      <Messages />
      <InputBar sendMessage={socket.sendMessage} />
    </React.Fragment>
  )
}

export default withSocket(ChatRoom)