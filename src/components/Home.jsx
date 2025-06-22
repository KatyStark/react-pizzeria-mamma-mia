import React, { useEffect, useState } from 'react'
import Header from './Header'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    }
    consultarApi()
  }, [])

  return (
    <div>
      <Header />

      <div className="row m-4">
        {
          pizzas.map(pizza => (
            <div key={pizza.id} className='col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <div className="card">
                <img src={pizza.img} className="card-img-top" alt="Pizzas" />
                <div className="card-body p-0">
                  <h5 className="card-title p-1 mt-1 mx-1">{pizza.name ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1) : ''}</h5>
                  <hr />
                  <p className="card-text text-muted mb-2 text-center">Ingredientes:</p>
                  <ul className="text-start list-unstyled mb-4">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>🍕 {ingredient} <hr /></li>
                    ))}
                  </ul>
                  <h5 className="card-text mt-3 text-center fs-3">Precio: ${pizza.price}</h5>
                  <div className="d-flex justify-content-between mt-3 mb-3 mx-5">
                    <button className="btn btn-outline-secondary text-dark">Ver Más 👀</button>
                    <button className="btn btn-dark btn-outline-secondary text-white">Añadir 🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home