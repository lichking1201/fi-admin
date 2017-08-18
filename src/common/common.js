import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import api from 'src/common/api'
import _ from 'lodash'

import { Notification } from 'element-ui'

window.Vue = Vue
window._ = lodash
window.moment = moment
window.axios = axios
window.app = window.app || {}

Object.assign(app, {
  api,
})

axios.interceptors.request.use(
  config => {
    const loginString = Cookies.get('login-string')
    if (loginString) {
      const params = config.params || {}
      config.params = Object.assign(params, {
        login_string: loginString,
      })
    } else {
      const params = config.params || {}
      config.params = Object.assign(params, {
        login_string: loginString,
      })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    if (res.data && res.data.code === 0) {
      return res.data.data
    }
    return Notification.error({
      title: 'Error',
      message: res.data.msg,
    })
  },
  error => {
    const err = error.response
    if (err) {
      switch (err.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          Cookies.remove('login-string')
          window.location.reload()
          break
        default:
          Notification.error({
            title: 'Error',
            message: err,
          })
          return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)
