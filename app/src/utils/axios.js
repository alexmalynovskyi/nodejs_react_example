import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  proxy: {
    host: process.env.REACT_APP_PROXY_HOST,
    port: process.env.REACT_APP_PROXY_PORT,
    protocol: 'http'
  },
  headers: {
    'Content-Type': 'application/json'
}
})

export default instance;