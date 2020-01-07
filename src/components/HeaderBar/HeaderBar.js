import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import { SignOutButton } from '../Auth'
import { useUserState } from '../../contexts/UserContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  signOut: {
    marginLeft: theme.spacing(2),
  }
}))

export default function HeaderBar({
  onMenuClick
}) {
  const classes = useStyles()
  const { profile } = useUserState()
  const { picture, name } = profile
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BattleChat
          </Typography>
          <Avatar alt={name} src={picture} />
          <SignOutButton className={classes.signOut} color="primary" variant="contained"/>
        </Toolbar>
      </AppBar>
    </div>
  )
}