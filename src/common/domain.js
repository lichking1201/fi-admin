const env = process.env.NODE_ENV

const domains = {
  production: {
    API_DOMAIN: '//api.project.fishtrip.cn',
  },
  alpha: {
    API_DOMAIN: '//api.project.alpha.fishtrip.cn',
  },
  development: {
    API_DOMAIN: '//api.project.alpha.fishtrip.cn',
  },
}

export default domains[env]
