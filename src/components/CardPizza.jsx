import React from 'react'

const CardPizza = (props) => {
  return (
    <div className="card p-0">
      <img src={props.img} className="card-img-top" alt="Pizzas" />
      <div className="card-body p-0">
        <h5 className="card-title p-1 mt-1 mx-1">{props.name}</h5>
        <hr />
        <p className="card-text text-muted mb-2 text-center">Ingredientes:</p>
        <p className="card-text text-center mb-4">
          🍕 <span>{props.ingredients.join(', ')}</span>
        </p>
        <hr />
        <h5 className="card-text mt-3 text-center fs-3">Precio: {props.price}</h5>
        <div className="d-flex justify-content-between mt-3 mb-3 mx-5">
          <button className="btn btn-outline-secondary text-dark">Ver Más 👀</button>
          <button className="btn btn-dark btn-outline-secondary text-white">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza