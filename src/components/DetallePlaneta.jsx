import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";


export const DetallePlaneta = () => {

  const { id } = useParams();
  const { store } = useGlobalReducer();

  const planetas = store.planetas.find(planeta => planeta.id === parseInt(id));

  if (!planetas) return <p>Planeta no encontrado</p>;


  return (

    <div className="detalle-planeta">
      <h1 className="titulo-planeta">{planetas.nombre}</h1>

      <img src={planetas.image} alt={planetas.nombre} className="imagen-planeta" />

      <div className="info-grid">
        <div><strong>Descripción:</strong> {planetas.description}</div>
        <div><strong>¿Destruido?:</strong> {planetas.isDestroyed ? "Sí" : "No"}</div>

      </div>

        <Link to="/" className="boton-cartas mt-3">
          🔥 Volver a Inicio
        </Link>
    </div>

  )
}
