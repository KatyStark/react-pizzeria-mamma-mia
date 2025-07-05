import React from "react"
import { useCart } from "../context/cartContext"

const Aumentar = ({ pizza }) => {
  const { addToCart } = useCart()

  return (
    <button onClick={() => addToCart(pizza)}>
      +
    </button>
  );
};

export default Aumentar
