import { createContext, useContext, useEffect, useState } from 'react'
import api from '../lib/axios'

const AuthContext = createContext(null)

function getTokenFromCookie() {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim())
  for (const cookie of cookies) {
    if (cookie.startsWith('api_token=')) {
      return cookie.substring('api_token='.length)
    }
  }
  return null
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)

  const IS_LOCAL = import.meta.env.VITE_IS_LOCAL === 'true'

  const loginInLocal = async () => {
    setLoading(true)
    console.log('ciao');
    try {
      const username = import.meta.env.VITE_LOCAL_USERNAME
      const password = import.meta.env.VITE_LOCAL_PASSWORD

      const response = await api.post('/v1/auth/user/login', { userid: username, password: password })
      const newToken = response.data.jwt

      document.cookie = `api_token=${newToken}; path=/;`
      setToken(newToken)
    } catch (error) {
      console.error('Local login failed', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const tokenFromCookie = getTokenFromCookie()
    console.log('IS_LOCAL:', IS_LOCAL)
    console.log('Token from cookie:', tokenFromCookie)
  
    if (tokenFromCookie) {
      console.log('Found token in cookie. Using it.')
      setToken(tokenFromCookie)
    } else if (IS_LOCAL) {
      console.log('No token found. In local mode, doing login.')
      loginInLocal().then(newToken => {
        if (newToken) {
          setToken(newToken)
        }
      })
    } else {
      console.log('No token found and not local. No action.')
    }
  }, [])

  const logout = () => {
    document.cookie = "api_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
