import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Cookies from 'js-cookie'

Vue.use(Router)

const router = new Router(routes)

// router.beforeEach(({ meta, path }, from, next) => {
//   if (path === '/' && window.location.hash.indexOf('?') !== -1) {
//     const url = window.location.hash.split('?')[1]
//     const loginString = getQueryString('login_string')
//     const userId = getQueryString('user_id')
//     const nickname = getQueryString('nickname')
//     Cookies.set('login-string', loginString)
//     Cookies.set('user-id', userId)
//     Cookies.set('nick-name', nickname)
//   } else {
//     const isLogin = Cookies.get('login-string')
//     if (!isLogin && path !== '/login') {
//       router.push({
//         path: '/login',
//       })
//       return
//     }
//     if (isLogin && path === '/login') {
//       location.hash = `${from.fullPath}`
//       // 登陆后禁止跳转到login页面
//       return false
//     }
//   }
//   next()
// })

export default router
