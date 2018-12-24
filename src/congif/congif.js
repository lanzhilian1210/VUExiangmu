// 获取token
import axios from 'axios'
function getToken () {
  var token = sessionStorage.getItem("token")
  return token
}
 
// 拦截加请求头
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    if (config.url.indexOf('login') === -1) {
      config.headers.authorization = getToken() 
    }
    if (config.url.indexOf('reg') === -1) {
      config.headers.authorization = getToken() 
    }
  } else if (config.method === 'get') {
    config.headers.authorization = getToken()
  }
  
  return config
}, (error) => { 
  return Promise.reject(error)
})  
export default axios
