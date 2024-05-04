/* eslint-disable @typescript-eslint/no-explicit-any */
export type InitialStateProps = {
  selectedAppId: number
  selectedAppName: string
  selectedAppStatus: string
  appData: any[]
}
export type ActionType = {
  type: string
  payload: any
}
export type AppContextProps = {
  state: InitialStateProps
  dispatch: React.Dispatch<ActionType>
}
