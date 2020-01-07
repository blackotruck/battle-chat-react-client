import React from 'react'
import ReactDOM from 'react-dom'
import Firebase, { FirebaseContext } from './components/Firebase'
import SocketIO, { SocketContext } from './components/SocketIO'
import './global-styles/reset.scss'

import App from './App'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <SocketContext.Provider value={new SocketIO()}>
      <App />
    </SocketContext.Provider>
  </FirebaseContext.Provider>,
  document.querySelector('#root'))