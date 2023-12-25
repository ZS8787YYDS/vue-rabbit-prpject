// 导入axios，定义一个axios的实例对象，指定接口基地址 接口超时时间 定义请求拦截器以及响应拦截器
// 最后将axios的实例对象导出
import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})


export default httpInstance