export type InitialStateProps = {
  selectedAppId: number
}
export type ActionType = {
  type: string
  payload: number
}
export type AppContextProps = {
  state: InitialStateProps
  dispatch: React.Dispatch<ActionType>
}
