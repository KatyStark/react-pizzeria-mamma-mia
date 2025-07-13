import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error">
      <div className="error2">
        <img src="/img/error404.png" alt="Imagen de error" />
        <h1>ERROR</h1>
        <h2>OPS! PAGINA NO ENCONTRADA</h2>
        <button>
          <Link to="/" className="link-sin-decoracion">
            Regresar a home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
