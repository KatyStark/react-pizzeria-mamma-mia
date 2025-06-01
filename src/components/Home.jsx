import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <section className='row'>
          <article className='col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
            <CardPizza name="Pizza Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="/img/pizza-napolitana.jpg" />
          </article>
          <article className='col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
            <CardPizza name="Pizza Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="/img/pizza-española.jpg" />
          </article>
          <article className='col-12 col-sm-12 col-md-6 col-lg-4 my-5'>
            <CardPizza name="Pizza Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="/img/pizza-pepperoni.png" />
          </article>
        </section>
      </main>
    </div>
  )
}

export default Home