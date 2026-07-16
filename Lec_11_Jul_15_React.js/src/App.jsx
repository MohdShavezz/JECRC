import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Todo />} />
         <Route
    path="/login"
    element={
        <Login />
    }
  />

        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
