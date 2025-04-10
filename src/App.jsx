import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import DigitalContracts from "./pages/DigitalContracts"
import Invoices from "./pages/Invoices"
import Contracts from "./pages/Contracts"
import { useAuth } from "./context/AuthContext"

const App = () => {
  const { login, logout, token, loading } = useAuth()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b shadow-sm px-6 py-4 grid grid-cols-3 items-center">
        <div></div>

        <div className="flex justify-center gap-4 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className={`px-3 py-2 rounded ${
              isActive("/") ? "bg-gray-200 text-[#2d2383]" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Contratti Digitali
          </Link>
          <Link
            to="/contracts"
            className={`px-3 py-2 rounded ${
              isActive("/contracts") ? "bg-gray-200 text-[#2d2383]" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Contratti
          </Link>
          <Link
            to="/invoices"
            className={`px-3 py-2 rounded ${
              isActive("/invoices") ? "bg-gray-200 text-[#2d2383]" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Fatture
          </Link>
        </div>

        <div className="flex justify-end mr-6">
          {token ? (
            <button
              onClick={logout}
              className="bg-[#e6007e] hover:bg-pink-700 text-white px-4 py-2 rounded text-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              disabled={loading}
              className="bg-[#2d2383] hover:bg-indigo-900 text-white px-4 py-2 rounded text-sm disabled:opacity-50"
            >
              {loading ? "Login..." : "Login"}
            </button>
          )}
        </div>
      </header>

      <main className="p-6 flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<DigitalContracts />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </main>
    </div>
  )
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)

export default AppWithRouter
