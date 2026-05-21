import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import CustomerDashboard from './pages/CustomerDashboard'
import RestaurantDashboard from './pages/RestaurantDashboard'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'
import OrderStatus from './pages/OrderStatus'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route 
          path="/customer-dashboard" 
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <CustomerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restaurant/:id" 
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <Menu />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <Checkout />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/order/:id" 
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <OrderStatus />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restaurant-dashboard" 
          element={
            <ProtectedRoute allowedRoles={['restaurant']}>
              <RestaurantDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
