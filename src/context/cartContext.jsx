import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./userContext"; // ✅ Importación corregida

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { email } = useUser(); // ✅ Se obtiene el email del usuario logueado
  const [cart, setCart] = useState([]);

  // ✅ Cargar carrito del usuario al montar (o cuando cambia el email)
  useEffect(() => {
    if (email) {
      const stored = localStorage.getItem(`cart-${email}`);
      setCart(stored ? JSON.parse(stored) : []);
    } else {
      setCart([]); // si no hay usuario, carrito vacío
    }
  }, [email]);

  // ✅ Guardar carrito en localStorage solo si hay email
  useEffect(() => {
    if (email) {
      localStorage.setItem(`cart-${email}`, JSON.stringify(cart));
    }
  }, [cart, email]);

  // ✅ Agregar pizza al carrito o aumentar cantidad
  const addToCart = (pizza) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === pizza.id);
      if (exists) {
        return prev.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  // ✅ Disminuir cantidad o eliminar si llega a 0
  const decreaseQuantity = (pizzaId) => {
    setCart((prev) => {
      return prev
        .map(item =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  // ✅ Vaciar carrito (sin borrar de localStorage)
  const resetCart = () => {
    if (email) {
      localStorage.setItem(`cart-${email}`, JSON.stringify([])); // opcional: guardar vacío
    }
    setCart([]);
  };

  // Total de cada pizza
  const getSubtotal = (pizzaId) => {
    const pizza = cart.find(item => item.id === pizzaId);
    return pizza ? pizza.price * pizza.quantity : 0;
  };

  // Total general del carrito
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      decreaseQuantity,
      resetCart,
      getSubtotal,
      getTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);