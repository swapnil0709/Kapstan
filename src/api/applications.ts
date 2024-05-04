import axios from 'axios'

export const getApplicationsData = async () => {
  return await axios.get('https://retoolapi.dev/71NNjB/applications')
}
