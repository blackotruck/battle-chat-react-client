import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { useUserDispatch } from '../../contexts/UserContext'

export const SignInButton = ({firebase, ...materialProps}) => {
  const dispatch = useUserDispatch()
  const history = useHistory()

  const handleSignIn = () => {
    firebase.signInWithGoogle()
    .then((data) => {
      dispatch({type: 'signup', data})
      history.push('/inner/lobby')
    })
    .catch(error => console.log(error))
  }
  
  return <Button onClick={handleSignIn} {...materialProps}>SignIn with Google</Button>
}

export default withFirebase(SignInButton)
