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
  selectedAppName: 'tic-tac-toc',
  selectedAppStatus: 'deployed',
  appData: [],
}

export const AppsContext = createContext<AppContextProps | null>(null)

const appReducer = (state: InitialStateProps, action: ActionType) => {
  switch (action.type) {
    case ActionEnum.UPDATE_SELECTED_APP: {
      return {
        ...state,
        selectedAppId: action.payload.id,
        selectedAppName: action.payload.name,
        selectedAppStatus: action.payload.status,
      }
    }
    case ActionEnum.STORE_APP_DATA: {
      return {
        ...state,
        appData: action.payload,
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
