import axios, { AxiosResponse } from 'axios'
import { DOMAIN_URL } from './urls'

const instance = axios.create({
  baseURL: DOMAIN_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
