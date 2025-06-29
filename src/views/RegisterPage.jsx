import React, { useState } from 'react'

const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [clave, setClave] = useState("")
  const [claveConfirmacion, setClaveConfirmacion] = useState("")

  const [error, setError] = useState(false)
  const [mensaje, setMensaje] = useState("")

  const validarDatos = (e) => {
    e.preventDefault()

    // Validación de campos vacíos
    if (!email.trim() || !clave.trim() || !claveConfirmacion.trim()) {
      setError(true)
      setMensaje("Todos los campos son obligatorios")
      return
    }

    // Validación de largo de la contraseña
    if (clave.length <= 6) {
      setError(true)
      setMensaje("La contraseña debe tener más de 6 caracteres")
      return
    }

    // Validación de coincidencia de contraseñas
    if (clave !== claveConfirmacion) {
      setError(true)
      setMensaje("Las contraseñas no coinciden")
      return
    }

    //Si todo correcto
    setError(false)
    setMensaje("Usuario registrado con éxito")

    //Limpiar inputs cuando el registro es correcto
    setEmail("")
    setClave("")
    setClaveConfirmacion("")
  }

  return (
    <div className="contenedorRegistro">
      <div className="registro">
        <h3>Registro</h3>
        <hr />
        <form onSubmit={validarDatos}>

          <p>Email: </p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          />

          <p>Contraseña: </p>
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)}
          />

          <p>Confirmar contraseña: </p>
          <input type="password" value={claveConfirmacion} onChange={(e) => setClaveConfirmacion(e.target.value)}
          />

          {mensaje && <p style={{ color: error ? 'red' : 'green' }}>{mensaje}</p>}

          <button type="submit">Registrar</button>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage