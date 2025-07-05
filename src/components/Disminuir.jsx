import React from "react"
import { useCart } from "../context/cartContext"

const Disminuir = ({ pizzaId }) => {
  const { decreaseQuantity } = useCart()

  return (
    <button onClick={() => decreaseQuantity(pizzaId)}>
      -
    </button>
  );
};

export default Disminuir