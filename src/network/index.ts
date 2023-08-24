import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASEURL,
  timeout: 60 * 1000,
})

export default instance
