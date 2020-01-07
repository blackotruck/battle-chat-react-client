import React from 'react'
import Button from '@material-ui/core/Button'
import { withFirebase } from '../Firebase'
import { withSocket } from '../SocketIO'
import { useUserDispatch, useUserState } from '../../contexts/UserContext'

function SignOutButton({firebase, socket, ...props}) {
  const dispatch = useUserDispatch()
  const { profile } = useUserState()
  const handleSignOut = () => {
    firebase.signOut()
    .then(() => {
      socket.disconnect(profile.id)
      dispatch({type: 'signout'})
    })
    .catch(error => console.log(error))
  }

  return <Button onClick={handleSignOut} {...props}>Sign Out</Button>
}

export default withSocket(withFirebase(SignOutButton))
