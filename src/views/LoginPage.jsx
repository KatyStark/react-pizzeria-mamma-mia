import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, clave);
      setMensaje("Inicio de sesión exitoso");
      setError(false);
      navigate("/profile");
    } catch (err) {
      setMensaje("Error al iniciar sesión");
      setError(true);
    }
  };

  return (
    <div className="contenedorRegistro">
      <div className="registro">
        <h3>Login</h3>
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

          {mensaje && (
            <p style={{ color: error ? "red" : "green" }}>{mensaje}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
