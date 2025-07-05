import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  });

  //Guardar carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  // Agregar pizza al carrito o aumentar cantidad
  const addToCart = (pizza) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === pizza.id)
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

  // Disminuir cantidad o eliminar si llega a 0
  const decreaseQuantity = (pizzaId) => {
    setCart((prev) => {
      return prev
        .map(item =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    });
  };

  // Total de cada pizza
  const getSubtotal = (pizzaId) => {
    const pizza = cart.find(item => item.id === pizzaId)
    return pizza ? pizza.price * pizza.quantity : 0;
  };

  // Total general del carrito
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, getSubtotal, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)