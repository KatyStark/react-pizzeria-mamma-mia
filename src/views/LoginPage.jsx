import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [clave, setClave] = useState("")

  const [error, setError] = useState(false)
  const [mensaje, setMensaje] = useState("")

  const validarDatos = (e) => {
    e.preventDefault()

    // Validación de campos vacíos
    if (!email.trim() || !clave.trim()) {
      setError(true)
      setMensaje("Todos los campos son obligatorios")
      return
    }

    // Validación de longitud de clave
    if (clave.length <= 6) {
      setError(true)
      setMensaje("La contraseña debe tener más de 6 caracteres")
      return
    }

    // Todo correcto
    setError(false)
    setMensaje("Inicio de sesión exitoso")

    //Limpiar inputs cuando el login es correcto
    setEmail("")
    setClave("")
  }

  return (
    <div className="contenedorRegistro">
      <div className="registro">
        <h3>Login</h3>
        <hr />
        <form onSubmit={validarDatos}>

          <p>Email: </p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          />

          <p>Contraseña: </p>
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)}
          />

          {mensaje && <p style={{ color: error ? 'red' : 'green' }}>{mensaje}</p>}

          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  )
}

export default LoginPage