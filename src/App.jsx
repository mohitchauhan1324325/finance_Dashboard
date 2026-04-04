import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/layout/Layout.jsx"
import Dashboard from './pages/Dashboard.jsx'
import Transaction from './pages/Transactions.jsx'
import Insights from './pages/Insights.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/insights' element={<Insights />} />
          </Routes> 
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
