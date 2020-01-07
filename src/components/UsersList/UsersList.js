import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { useUsersListState } from '../../contexts/UsersListContext'


const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    padding: theme.spacing(2)
  }
}))
const UserListItem = ({user}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Avatar alt={user.name} src={user.picture} />
      </ListItemIcon>
      <ListItemText>
        {user.name}
      </ListItemText>
    </ListItem>
  )
}
const UsersList = ({users}) => (
  <List>
    { Object.keys(users).map(userId => <UserListItem user={users[userId]} key={users[userId].id} /> )}
  </List>
)
const Sidebar = ({ socket }) => {
  const classes = useStyles()
  const { usersList } = useUsersListState()
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        BattleChat Menu
      </Typography>
      <UsersList users={usersList} />
    </div>
  )
}

export default Sidebar