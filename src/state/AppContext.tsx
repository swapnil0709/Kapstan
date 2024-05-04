/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from 'react'
import {
  ActionType,
  AppContextProps,
  InitialStateProps,
} from './AppContext.type'
import ActionEnum from './stateEnum'

const initialState: InitialStateProps = {
  selectedAppId: 1,
}

export const AppsContext = createContext<AppContextProps | null>(null)

const appReducer = (state: InitialStateProps, action: ActionType) => {
  switch (action.type) {
    case ActionEnum.UPDATE_APP_ID: {
      return {
        ...state,
        selectedAppId: action.payload,
      }
    }
    default:
      return state
  }
}

export const AppsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const contextValue = {
    state,
    dispatch,
  }
  return (
    <AppsContext.Provider value={contextValue}>{children}</AppsContext.Provider>
  )
}
