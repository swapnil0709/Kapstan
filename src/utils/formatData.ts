/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertUnixTimestampToString } from './dateTime'

interface DataItem {
  id: number
  timestamp: string
  applicationId: string
  cpuUtilization?: string
  memoryUtilization?: string
}

interface ResultItem {
  timestamp: string
  [key: string]: string
}

export const transformLineChartData = (
  data: DataItem[],
  appData: any[]
): ResultItem[] => {
  return data.reduce((acc: ResultItem[], curr: DataItem) => {
    const { timestamp, applicationId, cpuUtilization, memoryUtilization } = curr
    const formattedTime = convertUnixTimestampToString(timestamp)
    const foundRecord = appData.find(
      (item) => item.id === Number(applicationId)
    )
    let entry = acc.find((item) => item.timestamp === formattedTime)

    if (!entry) {
      entry = { timestamp: formattedTime }
      acc.push(entry)
    }
    if (cpuUtilization) {
      entry[`${foundRecord?.name}`] = cpuUtilization
    }
    if (memoryUtilization) {
      entry[`${foundRecord?.name}`] = memoryUtilization
    }

    return acc
  }, [])
}
