import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2">
          <Link className="navbar-brand text-white" to="/">Pizzería Mamma Mia!</Link>
          <button>
            <Link className='botones-sin-decoracion' to="/">🍕 Home</Link>
          </button>
          <button>
            <Link className='botones-sin-decoracion' to="/login">🔐 Login</Link>
          </button>
          <button>
            <Link className='botones-sin-decoracion' to="/register">📝 Register</Link>
          </button>
          <button>
            <Link className='botones-sin-decoracion' to="/profile">👤 Profile</Link>
          </button>
          <button>🔒 Logout</button>
        </div>
        <div>
          <button>
            <Link className='botones-sin-decoracion' to="/cart">
              🛒 Total: ${total.toLocaleString("es-CL")}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar