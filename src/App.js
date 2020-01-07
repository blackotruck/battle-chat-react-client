import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Join from './Pages/Join'
import InnerApp from './components/InnerApp/InnerApp'
import { UserProvider } from './contexts/UserContext'
import { UsersListProvider } from './contexts/UsersListContext'

const App = () => (
  <UserProvider>
    <UsersListProvider>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/inner" component={InnerApp} />
      </Router>
    </UsersListProvider>
  </UserProvider>
)

export default App