/**
 * 获取url参数的值
 * @param {String} key url参数Key 
 * @return {String}
 * @example
 * url: http://a.b.c?login_stiring=123456
 * getQueryString('login_string') -> '123456'
 */
export function getQueryString(key) {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  let r = window.location.hash.substr(3).match(reg) //获取url中"?"符后的字符串并正则匹配
  let context = ''
  if (r != null) context = r[2]
  reg = null
  r = null
  return context == null || context == '' || context == 'undefined'
    ? ''
    : context
}

/**
 * 更新url参数
 * @param  {String} uri url
 * @param  {Object} obj {query: value}
 * @return {String}     url?query
 * @example
 * updateQueryStringParameter('lvh.me/user=li', {user: 'chen', age: 123})
 * ->'lvh.me/user=chen&age=123'
 */
export function updateQueryStringParameter(uri, obj) {
  let url = uri || location.host
  const keys = Object.keys(obj)
  keys.forEach(function(key) {
    const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
    const separator = url.indexOf('?') !== -1 ? '&' : '?'
    if (url.match(re)) {
      url = url.replace(re, '$1' + key + '=' + obj[key] + '$2')
    } else {
      url = url + separator + key + '=' + obj[key]
    }
  })
  return url
}

export function fastDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function setCache(key, value) {
  if (!value) return false
  const localStorage = window.localStorage
  if (localStorage) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    return localStorage.setItem(key, value)
  } else {
    alert('大清都亡了,下个新点的浏览器吧!')
  }
}

/**
 * 读取缓存
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function getCache(key) {
  const localStorage = window.localStorage
  if (localStorage) return JSON.parse(localStorage.getItem(key))
  else alert('大清都亡了,下个新点的浏览器吧!')
}

export function loadImageAsync(url) {
  var _URL = window.URL || window.webkitURL
  if (!_URL) return {}

  if (typeof url === 'object') {
    url = _URL.createObjectURL(url)
  }
  return new Promise(function(resolve, reject) {
    var image = new Image()
    image.onload = function() {
      resolve(image)
    }
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url))
    }
    image.src = url
  })
}
