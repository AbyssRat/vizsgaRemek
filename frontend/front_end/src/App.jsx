import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Rentals from './pages/Rentals'
import Register from './pages/Register'

import ProtectedRoute from './components/ProtectedRoute'

import { useState } from 'react'
import './styles/App.css'
import { useAuth } from './auth/authContext';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rentals"
          element={
            <ProtectedRoute>
              <Rentals />
            </ProtectedRoute>
          }
        />
      </Routes>
    
    </>
  )
}

export default App
