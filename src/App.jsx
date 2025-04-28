import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DigitalContracts from './pages/DigitalContracts'
import Contracts from './pages/Contracts'
import Invoices from './pages/Invoices'

const IS_DEV = import.meta.env.VITE_ENV === 'development'

const App = () => {
  if (!IS_DEV) {
    const root = document.getElementById('root')
    const initialPage = root?.dataset.page || 'digitalcontracts'

    if (initialPage === 'contracts') return <Contracts />
    if (initialPage === 'invoices') return <Invoices />
    if (initialPage === 'digitalcontracts') return <DigitalContracts />
    
    return <div style={{ padding: '1rem' }}>Pagina non trovata</div>
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white border-b shadow-sm px-6 py-4 flex gap-4">
          <Link
            to="/"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            Contratti Digitali
          </Link>
          <Link
            to="/contracts"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            Contratti
          </Link>
          <Link
            to="/invoices"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            Fatture
          </Link>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<DigitalContracts />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
