const env = process.env.NODE_ENV

const domains = {
  production: {
    API_DOMAIN: 'http://api.fiiish.fishtrip.cn/',
    USER_CENTER_DOMAIN: 'http://uc.fishtrip.cn/',
  },
  alpha: {
    API_DOMAIN: 'http://api.fiiish.alpha.fishtrip.cn/',
    USER_CENTER_DOMAIN: 'http://uc.alpha.fishtrip.cn/',
  },
  development: {
    API_DOMAIN: 'http://api.fiiish.alpha.fishtrip.cn/',
    USER_CENTER_DOMAIN: 'http://uc.alpha.fishtrip.cn/',
  },
}

export default domains[env]
