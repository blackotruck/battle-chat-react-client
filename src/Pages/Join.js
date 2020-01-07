import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LockScreen from '../components/Lock/Lock'
import { SignInButton } from '../components/Auth'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '100%'
  },
  gridContainer: {
    height: '100%'
  }
}))

export const SignIn = () => {
  const classes = useStyles()
  
  return (
    <LockScreen>
      <Paper className={classes.root}>
        <Grid className={classes.gridContainer} container alignContent="space-between">
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Welcome to BattleChat
          </Typography>
          <Typography component="p" align="center">
            A small experiment in modern Web Development
          </Typography>
          <SignInButton color="primary" variant="contained" fullWidth />
        </Grid>
      </Paper>
    </LockScreen>
  )
}

export default SignIn