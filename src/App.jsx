import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Cart />
      {/*<RegisterPage/>*/}
      {/*<LoginPage/>*/}
      <Footer/>
    </>
  )
}

export default App
