import { useState } from "react";
import { Link } from "react-router-dom";


export const CardPlanetas = ({ planeta, onAddFavorito }) => {
  const [] = useState(false);

  return (
    <div className="card">
      <img src={planeta.image} alt={planeta.name} />
      <h3>{planeta.name}</h3>

      <div className="botones">
        <button onClick={() => onAddFavorito(planeta)} className="boton-cartas">🐉 Favorito</button>

        <Link to={`/planeta/${planeta.id}`} className="boton-cartas">
          ⚡Saber más
        </Link>

      </div>
      
    </div>
  );
};








