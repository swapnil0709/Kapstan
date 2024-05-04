import axios from '../api/axiosConfig'

export const fetchData = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
