import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PizzaPage = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) {
          throw new Error("No se encontró la pizza");
        }
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchPizza();
  }, [id]);

  if (error) return <p>Error al cargar la pizza</p>;
  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="row m-4 d-flex justify-content-center">
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mt-3">
        <div className="card">
          <img src={pizza.img} className="card-img-top" alt="Pizzas" />
          <div className="card-body p-0">
            <h5 className="card-title p-1 mt-1 mx-1">
              {pizza.name
                ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)
                : ""}
            </h5>
            <hr />
            <p className="card-text mb-2 text-center">Ingredientes:</p>
            <ul className="text-start list-unstyled mb-4 mx-3">
              {pizza.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  🍕 {ingredient} <hr />
                </li>
              ))}
            </ul>
            <p className="card-text mb-2 text-center">Descripción:</p>
            <p className="text-muted mx-3">{pizza.desc}</p>
            <h5 className="card-text mt-3 text-center fs-3">
              Precio: ${pizza.price}
            </h5>
            <div className="text-center mt-3 mb-3 mx-5">
              <button className="btn btn-dark btn-outline-secondary text-white">
                <Link to="/" className="text-decoration-none text-white">Regresar a home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
