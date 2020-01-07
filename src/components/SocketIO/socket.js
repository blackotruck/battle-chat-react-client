import io from 'socket.io-client'

let socket
let profile = null

class SocketIO {
  constructor() {
    socket = io('localhost:5000')
  }

  init(userProfile) {
    profile = userProfile
  }

  off() {
    socket.off()
  }

  socketInstance() {
    return socket
  }

  join(room) {
    if(profile === null) {
      throw new Error ('userData must be initialize')
    }
    socket.emit('join', { profile, room})
  }

  joinLobby() {
    this.join('lobby')
  }

  disconnect(id) {
    socket.emit('leave',{id})
    profile = null
  }
  
  sendMessage(message) {
    if(message.trim()) {
      socket.emit('sendMessage', profile.id, message, 'lobby')
    }
  }
}

export default SocketIO