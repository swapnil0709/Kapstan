import axios from 'axios'

export const getCpuUtilizationData = async () => {
  return await axios.get('https://retoolapi.dev/Ymxfa2/cpuutilization')
}
