import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import CartPage from './views/CartPage'
import ProfilePage from './views/ProfilePage'
import NotFound from './views/NotFound'
import PizzaPage from './views/PizzaPage'
import { CartProvider } from './context/cartContext'
import { useUser } from './context/userContext'

function App() {
  const { token } = useUser()

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={token ? <Navigate to="/" replace /> : <LoginPage/>} />
          <Route path='/register' element={token ? <Navigate to="/" replace /> : <RegisterPage />} />
          <Route path='/profile' element={!token ? <Navigate to="/login" replace /> : <ProfilePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/pizza/:id' element={<PizzaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default  App
