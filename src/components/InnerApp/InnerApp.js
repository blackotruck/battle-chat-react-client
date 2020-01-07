import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { useUserState } from '../../contexts/UserContext'
import { withSocket } from '../SocketIO'
import HeaderBar from '../HeaderBar/HeaderBar'
import { ChatRoom } from '../ChatRoom'
import {
  useUsersListDispatch,
  USERS_LIST_ACTIONS
} from '../../contexts/UsersListContext'
import UsersList from '../UsersList/UsersList'

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    height: 'calc(100vh - 64px)'
  },
  sidebar: {
    borderRight: '1px solid #ddd'
  }
}))

function InnerApp({ socket }) {
  const classes = useStyles()
  const { profile } = useUserState()
  const [menuIsOpen, toggleMenu] = useState(false)
  const dispatch = useUsersListDispatch()
  const theme = useTheme();
  const matchBigScreen = useMediaQuery(theme.breakpoints.up('sm'))

  useEffect(() => {
    socket.socketInstance().on(USERS_LIST_ACTIONS.NEW_CONNECTION, (user) => {
      dispatch({type: USERS_LIST_ACTIONS.NEW_CONNECTION, user})
    })
    socket.socketInstance().on('USERS_LIST', (usersList) => {
      dispatch({type: USERS_LIST_ACTIONS.USERS_LIST, usersList})
    })
    
  })

  useEffect(() => {
    if (profile) {
      socket.init(profile)
      socket.joinLobby(profile)
    }
  }, [])

  console.log('render Inner')
  return (
    <React.Fragment>
      {
        profile ? 
        <React.Fragment>
          <HeaderBar onMenuClick={() => toggleMenu(true)}/>
          <Drawer open={menuIsOpen} onClose={() => toggleMenu(false)}> 
            <UsersList />
          </Drawer>
          <Grid container className={classes.innerContainer}>
            <Hidden xsDown>
              <Grid item sm={5} md={4} className={classes.sidebar}>
                <UsersList />
              </Grid>
            </Hidden>
            <Grid item sm={7} md={8} xs={12}>
              <Switch>
                <Route path="/inner/lobby" component={ChatRoom} />
              </Switch>
            </Grid>
          </Grid>
        </React.Fragment> :
        <Redirect to='/' />
      }
    </React.Fragment>
  )
}

export default withSocket(InnerApp)