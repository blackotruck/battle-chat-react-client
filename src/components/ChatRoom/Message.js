import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useUserState } from '../../contexts/UserContext'

const useStyles = makeStyles(theme => ({
  root: {
    clear: 'both',
    '&:first-child': {
      marginTop: theme.spacing(2)
    }
  },
  bubble: {
    padding: theme.spacing(1),
    maxWidth: '90%',
    marginBottom: theme.spacing(2)
  },
  admin: {
    backgroundColor: '#f0f0f0',
    float: 'left'
  },
  self: {
    backgroundColor: '#002984',
    color: '#fff',
    float: 'right'
  },
  other: {
    backgroundColor: '#fff',
    width: 'auto',
    float: 'left'
  }
}))

export default ({ user, text }) => {
  const classes = useStyles()
  const { profile } = useUserState()
  const isSelf = user === profile.name
  const isAdmin = user === 'BattleChat'
  const bubbleClass =  isSelf ? classes.self :
                       isAdmin ? classes.admin :
                       classes.other

  return (
    <div className={classes.root}>
      <Paper className={`${classes.bubble} ${bubbleClass}`} >
        <p>
          {user} says:
        </p>
        <p>{text}</p>
      </Paper>
    </div>
  )
}
