import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [claveConfirmacion, setClaveConfirmacion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();

    if (clave !== claveConfirmacion) {
      setMensaje("Las contraseñas no coinciden");
      setError(true);
      return;
    }

    try {
      await registerUser(email, clave);
      setMensaje("Registro exitoso");
      setError(false);
      navigate("/profile");
    } catch (err) {
      setMensaje("Error al registrar");
      setError(true);
    }
  };

  return (
    <div className="contenedorRegistro">
      <div className="registro">
        <h3>Registro</h3>
        <hr />
        <form onSubmit={validarDatos}>
          <p>Email: </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Contraseña: </p>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />

          <p>Confirmar contraseña: </p>
          <input
            type="password"
            value={claveConfirmacion}
            onChange={(e) => setClaveConfirmacion(e.target.value)}
          />

          {mensaje && (
            <p style={{ color: error ? "red" : "green" }}>{mensaje}</p>
          )}

          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;