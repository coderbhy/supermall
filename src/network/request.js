const axios = require('axios');

export function request (options) {
  const instance = axios.create({
    // baseURL: '' 接口找 coderwhy 老师
  })
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
    return Promise.reject(err);
  })

  return instance(options);
}