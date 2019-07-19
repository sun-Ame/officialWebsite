import axios from 'axios'
import qs from 'qs'
import config from './config'
import { resolve } from 'url';

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

const http = axios.create(config)

// POST 传参序列化
http.interceptors.request.use(
  config => {
    if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
http.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)
// Vue.prototype.$axios = http;
export default http 