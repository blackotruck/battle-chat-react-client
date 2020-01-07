import React from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import { withSocket } from '../SocketIO'

export default ({children}) => {
  return (
    <div>
      <HeaderBar />
      {children}
    </div>
  )
}
