import { createContext, useContext, useEffect, useState } from 'react'
import api from '../lib/axios'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.post('/v1/auth/login', { apikey: apiKey })
      const newToken = response.data.jwt
      localStorage.setItem('token', newToken)
      setToken(newToken)
    } catch (err) {
      console.error("Login fallita", err)
      setToken(null)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) setToken(stored)
  }, [])

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
