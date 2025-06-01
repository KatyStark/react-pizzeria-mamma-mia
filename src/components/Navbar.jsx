import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav class="navbar navbar-expand-lg navbar-custom px-3">
      <div class="container-fluid">
        <div class="d-flex align-items-center gap-2">
          <span class="navbar-brand">Pizzería Mamma Mia!</span>
          <button>🍕 Home</button>
          {!token ? (
            <>
              <button>🔐 Login</button>
              <button>📝 Register</button>
            </>
          ) : (
            <>
              <button>👤 Profile</button>
              <button>🔒 Logout</button>
            </>
          )}
        </div>
        <div>
          <button class='total'>
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar