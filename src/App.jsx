import { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/layout/Layout.jsx"
import Dashboard from './pages/Dashboard.jsx'
import Transaction from './pages/Transactions.jsx'
import Insights from './pages/Insights.jsx'
import { AppContext } from './context/AppContext.jsx'

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/insights' element={<Insights />} />
          </Routes> 
        </Layout>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
