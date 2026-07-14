import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Form from './pages/Form'
import Counter from './pages/Counter'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/form">Sign Form</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
