import React, { createContext, useContext, useReducer } from 'react'

function getUsersList() {
  try {
    return JSON.parse(localStorage.getItem('usersList')) || {}
  } catch(e) {
    throw new Error ('Error reading local storage')
  }
}

/* function setUsersList (usersList) {
  try {
    return localStorage.setItem('usersList', JSON.stringify(usersList))
  } catch(e) {
    throw new Error ('Error reading local storage')
  }
} */
const initialState = {
  usersList: {...getUsersList()},
}

const UsersListStateContext = createContext(initialState)
const UsersListDispatchContext = createContext()

const USERS_LIST_ACTIONS = {
  NEW_CONNECTION: 'NEW_CONNECTION',
  USERS_LIST: 'USERS_LIST',
}

function usersReducer(state, action) {
  switch(action.type) {
    case USERS_LIST_ACTIONS.NEW_CONNECTION: {
      console.log(action)
      return {
        usersList: {
          ...state.usersList,
          [action.user.id]: action.user
        }
      }
    }
    case USERS_LIST_ACTIONS.USERS_LIST: {
      return {
        usersList: action.usersList
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UsersListProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState)
  return (
    <UsersListStateContext.Provider value={state}>
      <UsersListDispatchContext.Provider value={dispatch}>
        {children}
      </UsersListDispatchContext.Provider>
    </UsersListStateContext.Provider>
  )
}

function useUsersListState() {
  const context = useContext(UsersListStateContext)
   if (context === undefined) {
     throw new Error("useUserState must be use inside a UsersListProvider")
   }
   return context
}

function useUsersListDispatch() {
  const context = useContext(UsersListDispatchContext)
   if (context === undefined) {
     throw new Error("useUserDispatch must be use inside a UsersListProvider")
   }
   return context
}

export {
  UsersListProvider,
  useUsersListState,
  useUsersListDispatch,
  USERS_LIST_ACTIONS
}