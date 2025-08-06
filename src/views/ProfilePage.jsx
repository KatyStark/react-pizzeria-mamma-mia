import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';
import { useCart } from '../context/cartContext'; // ⬅ importar resetCart

const ProfilePage = () => {
  const { getProfile, logoutUser } = useUser();
  const { resetCart } = useCart(); // ⬅ usar resetCart
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getProfile();
      if (data && data.email) {
        setUserEmail(data.email);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    logoutUser();
    resetCart(); // ⬅ vaciar carrito al cerrar sesión
    navigate('/');
  };

  return (
    <div className="perfil">
      <div className='perfil2'>
        <img src="/img/pizzaperfil.png" alt="Logo pizza" />
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
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default ProfilePage;