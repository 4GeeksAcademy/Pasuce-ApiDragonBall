import { useState } from "react";
import { Link } from "react-router-dom";


export const CardPersonaje = ({ personaje, onAddFavorito }) => {
  const [] = useState(false);

  return (
    <div className="card">
      <h3>{personaje.name}</h3>
      <img src={personaje.image} alt={personaje.name} />

      <div className="botones">
        <button onClick={() => onAddFavorito(personaje)} className="boton-cartas">🐉 Favorito</button>

        <Link to={`/personaje/${personaje.id}`} className="boton-cartas">
          ⚡Saber más
        </Link>

      </div>

    </div>
  );
};






