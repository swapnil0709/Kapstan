import axios from 'axios'

export const getMemoryUtilizationData = async () => {
  return await axios.get('https://retoolapi.dev/ybFVVH/memoryutilization')
}
