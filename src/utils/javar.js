import axios from 'axios'
    // let jwtToken = window.localStorage.getItem('jwttoken')
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 100000,  headers: ( 
    {'X-Custom-Header': 'foobar'},
  {"Content-Type":"application/json"}
  )
});


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // let jwtToken = window.localStorage.getItem('jwttoken')
    // console.log(jwtToken)
    // // 将token携带在请求头中
    // config.headers.to        return config
     return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log(error.response)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data.error);
  });
  export default instance