import domain from './domain'

const { API_DOMAIN, USER_CENTER_DOMAIN } = domain

const api = {
  login: `${API_DOMAIN}admin_api/v1/auth_url`,
  logout: `${USER_CENTER_DOMAIN}`,
}

export default api
