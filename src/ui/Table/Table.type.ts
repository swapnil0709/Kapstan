export type eventDataProps = {
  applicationId: number
  id: number
  status: 'string'
  timestamp: string
  version: number
}

export type appDataProps = {
  desiredVersion: string
  id: number
  name: string
  status: string
  updatedAt: string
  version: string
}
export type TableProps = {
  data: eventDataProps[]
  appData: appDataProps[]
}
