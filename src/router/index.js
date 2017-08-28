import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Cookies from 'js-cookie'

Vue.use(Router)

const router = new Router(routes)

router.beforeEach(({ meta, path }, from, next) => {
  if (window.location.hash.indexOf('login_string') !== -1) {
    const url = window.location.hash.split('?')[1]
    const loginString = util.getQueryString('login_string')
    const nickname = util.getQueryString('nickname')
    Cookies.set('login-string', loginString)
    Cookies.set('nick-name', decodeURI(nickname))
    location.hash = '#/'
    location.reload()
    return
  } else {
    const isLogin = Cookies.get('login-string')
    if (path === '/error') {
      next()
      return
    }
    if (!isLogin && path !== '/login') {
      router.push({
        path: '/login',
        query: {
          redirectUrl: window.location.href,
        },
      })
      return
    }
    if (isLogin && path === '/login') {
      location.hash = `${from.fullPath}`
      // 登陆后禁止跳转到login页面和/
      return false
    }
  }
  next()
})

export default router
