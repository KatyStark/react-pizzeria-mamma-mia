import React from "react"
import { useCart } from "../context/cartContext"


const AgregarPizzas = ({ pizza, onAdded }) => {
  const { addToCart } = useCart()

  const handleClick = () => {
    addToCart(pizza)
    
    if (onAdded) {
      onAdded()
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-dark btn-outline-secondary text-white">Añadir 🛒</button>
  );
};

export default AgregarPizzas
