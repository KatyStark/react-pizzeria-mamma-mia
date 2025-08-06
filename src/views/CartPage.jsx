import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import Aumentar from "../components/Aumentar";
import Disminuir from "../components/Disminuir";
import { useUser } from "../context/userContext"; 

const CartPage = () => {
  const { cart, getTotal } = useCart();
  const { token } = useUser(); 
  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) throw new Error("Error al procesar el pedido");

      setMensaje("¡Compra realizada con éxito!");
    } catch (error) {
      setMensaje("Error al procesar la compra");
    }
  };

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
        <button disabled={!token || cart.length === 0} onClick={handleCheckout}>Pagar</button>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};

export default CartPage;