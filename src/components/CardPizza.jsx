import React from 'react'

const CardPizza = (props) => {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mt-3'>
      <div className="card">
        <img src={props.piz.img} className="card-img-top" alt="Pizzas" />
        <div className="card-body p-0">
          <h5 className="card-title p-1 mt-1 mx-1">{props.piz.name}</h5>
          <hr />
          <p className="card-text text-muted mb-2 text-center">Ingredientes:</p>
          <ul className="text-start list-unstyled mb-4">
            {props.piz.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient} <hr /></li>
            ))}
          </ul>
          <h5 className="card-text mt-3 text-center fs-3">Precio: ${props.piz.price}</h5>
          <div className="d-flex justify-content-between mt-3 mb-3 mx-5">
            <button className="btn btn-outline-secondary text-dark">Ver Más 👀</button>
            <button className="btn btn-dark btn-outline-secondary text-white">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza