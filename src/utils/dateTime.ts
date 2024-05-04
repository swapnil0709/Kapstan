import { formatDistance, format } from 'date-fns'

export const getTimeAgo = (timestamp: string) => {
  const timestampInMs = parseInt(timestamp) * 1000

  const distance = formatDistance(new Date(timestampInMs), new Date(), {
    addSuffix: true,
  })

  return `Last updated ${distance}`
}

export const convertUnixTimestampToString = (timestamp: string) => {
  const timestampInMs = parseInt(timestamp) * 1000

  const date = new Date(timestampInMs)

  const formattedTime = format(date, 'hh:mma')

  return formattedTime
}
