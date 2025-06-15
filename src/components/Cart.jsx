import React, { useState } from 'react'
import { pizzas } from '../data/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(
  pizzas.slice(0, 3).map(item => ({ ...item, count: item.count ?? 1 }))
)
   //Funcion de incrementar y disminuir cantidad de pizzas
  const Incrementar = (id) => {
    const actualizaCart = cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
    setCart(actualizaCart)
  }

  const Disminuir = (id) => {
    const actualizaCart = cart
      .map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter(item => item.count > 0) // elimina si count llega a 0
    setCart(actualizaCart)
  }

  //Suma total de las pizzas
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className="container mt-5 mb-4 cart">
      <h4 className='mb-4 mt-4'>Detalles del pedido:</h4>
      {cart.map(item => (
        <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-2">
          <div className="d-flex align-items-center gap-2">
            <img src={item.img} alt={item.name} width={50} height={50} style={{ objectFit: 'cover' }} />
            <strong>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</strong>
          </div>

          <span>${item.price.toLocaleString('es-CL')}</span>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => Disminuir(item.id)}
            >
              -
            </button>
            <span>{item.count}</span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => Incrementar(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-dark mt-2 mb-2">Pagar</button>
    </div>
  )
}

export default Cart