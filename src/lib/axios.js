import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

api.interceptors.request.use((config) => {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim())
  const tokenCookie = cookies.find(cookie => cookie.startsWith('api_token='))
  const token = tokenCookie ? tokenCookie.substring('api_token='.length) : null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
