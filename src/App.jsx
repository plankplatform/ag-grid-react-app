import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DigitalContracts from "./pages/DigitalContracts"
import { useAuth } from "./context/AuthContext"

const App = () => {
  const { login, logout, token, loading } = useAuth()

  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <h1 className="text-3xl font-bold">Contratti Digitali</h1>
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login} disabled={loading}>
            {loading ? "Login..." : "Login"}
          </button>
        )}
      </div>

      <Routes>
        <Route path="/" element={<DigitalContracts />} />
      </Routes>
    </Router>
  )
}

export default App
