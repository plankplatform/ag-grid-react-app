import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DigitalContracts from '../pages/DigitalContracts'
import Contracts from '../pages/Contracts'
import Invoices from '../pages/Invoices'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white border-b shadow-sm px-6 py-4 flex gap-4">
          <Link to="/">Contratti Digitali</Link>
          <Link to="/contracts">Contratti</Link>
          <Link to="/invoices">Fatture</Link>
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

export default AppRouter
