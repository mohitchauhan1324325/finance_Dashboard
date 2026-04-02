import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import Dashboard from './pages/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter> */}

      <p>Hello</p>
    </>
  )
}

export default App
