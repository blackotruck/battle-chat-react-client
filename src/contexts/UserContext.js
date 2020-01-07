import React, {createContext, useContext, useReducer} from 'react'

function getSignedUser() {
  try {
    return JSON.parse(localStorage.getItem('profile'))
  } catch(e) {
    throw new Error ('Error reading local storage')
  }
}

function setSignedUser(data) {
  try {
    return localStorage.setItem('profile', JSON.stringify(data))
  } catch(e) {
    throw new Error ('Error reading local storage')
  }
}

const initialState = {
  profile: getSignedUser()
}

const UserStateContext = createContext(initialState)
const UserDispatchContext = createContext()

function userReducer(state, action) {
  switch(action.type) {
    case 'signup': {
      setSignedUser(action.data.additionalUserInfo.profile)
      return {
        ...state,
        profile: action.data.additionalUserInfo.profile
      }
    }
    case 'signout': {
      localStorage.clear()
      return {
        profile: null
      }
    }  
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

function useUserState() {
  const context = useContext(UserStateContext)
   if (context === undefined) {
     throw new Error("useUserState must be use inside a UserProvider")
   }
   return context
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext)
   if (context === undefined) {
     throw new Error("useUserDispatch must be use inside a UserProvider")
   }
   return context
}

export {UserProvider, useUserState, useUserDispatch}