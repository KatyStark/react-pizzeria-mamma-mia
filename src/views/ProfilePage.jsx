import React from 'react';

const ProfilePage = () => {
  // Por ahora, datos estáticos como se pidió
  const userEmail = 'katyamp95@gmail.com';

  return (
    <div className="perfil">
      <div className='perfil2'>
        <img src="/img/pizzaperfil.png" alt="Logo pizza" />
        <h3>Katherin Mendoza</h3>
        <p>{userEmail}</p>
        <img src="/img/pizzaperfil.png" alt="Logo pizza" />
      </div>
      <div className='perfil3'>
        <h3>Perfil del usuario</h3>
        <ul>
          <li><a href="#">📝 Información personal</a></li>
          <li><a href="#">📄 Datos de tu cuenta</a></li>
          <li><a href="#">🔒 Seguridad</a></li>
          <li><a href="#">📌 Direcciones</a></li>
          <li><a href="#">💳 Tarjetas</a></li>
          <li><a href="#">📦 Mis pedidos</a></li>
        </ul>
        <button>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default ProfilePage;