import { createContext, useContext, useEffect, useState } from 'react'

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

  useEffect(() => {
    const tokenFromCookie = getTokenFromCookie()
    if (tokenFromCookie) {
      setToken(tokenFromCookie)
    }
  }, [])

  const logout = () => {
    document.cookie = "api_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
