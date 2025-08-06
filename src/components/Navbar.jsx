import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import { useUser } from '../context/userContext'

const Navbar = () => {
  const { token, logoutUser } = useUser()
  const { getTotal, cart, resetCart } = useCart()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalValue = getTotal();
    setTotal(totalValue);
  }, [cart]);

  const handleLogout = () => {
    logoutUser();
    resetCart(); //vacía el carrito al cerrar sesión
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2">
          <Link className="navbar-brand text-white" to="/">Pizzería Mamma Mia!</Link>
          <button>
            <Link className='botones-sin-decoracion' to="/">🍕 Home</Link>
          </button>

          {token ? (
            <>
              <button>
                <Link className='botones-sin-decoracion' to="/profile">👤 Profile</Link>
              </button>
              <button onClick={handleLogout}>🔒 Logout</button> {/* ⬅ se actualiza aquí */}
            </>
          ) : (
            <>
              <button>
                <Link className='botones-sin-decoracion' to="/login">🔐 Login</Link>
              </button>
              <button>
                <Link className='botones-sin-decoracion' to="/register">📝 Register</Link>
              </button>
            </>
          )}
        </div>

        <div>
          <button>
            <Link className='botones-sin-decoracion' to="/cart">
              🛒 Total: ${Number(total).toLocaleString("es-CL")}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar