import axios from 'axios'

export const getEventHistoryData = async () => {
  return await axios.get('https://retoolapi.dev/TYjDIe/eventhistory')
}
