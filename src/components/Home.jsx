import React from 'react'
import { pizzas } from '../data/pizzas'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>
      <Header />
      <section className='row m-4'>
          {pizzas.map(piz => (<CardPizza key={piz.id} piz={piz} />))}
      </section>
    </div>
  )
}

export default Home