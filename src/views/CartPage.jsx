import React from "react";
import { useCart } from "../context/cartContext";
import Aumentar from "../components/Aumentar";
import Disminuir from "../components/Disminuir";
import { useUser } from "../context/userContext"; 

const CartPage = () => {
  const { cart, getTotal } = useCart();
  const { token } = useUser(); 

  return (
    <div className="cartContenedor">
      <h3>Detalles del pedido:</h3>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart">
          <img src={pizza.img} alt={pizza.name} />
          <p>
            {pizza.name
              ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)
              : ""}
          </p>
          <h3 className="mx-4">
            ${Number(pizza.price * pizza.quantity).toLocaleString("es-CL")}
          </h3>
          <div className="mx-4">
            <Disminuir pizzaId={pizza.id} />
            <span className="mx-2">{pizza.quantity}</span>
            <Aumentar pizza={pizza} />
          </div>
        </div>
      ))}

      <div className="cart2">
        <h3>Total: ${getTotal().toLocaleString("es-CL")}</h3>
        {/*Botón pagar deshabilitado si no hay token */}
        <button disabled={!token}>Pagar</button>
      </div>
    </div>
  );
};

export default CartPage;
