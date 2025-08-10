import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";


export const DetallePersonaje = () => {
    const { id } = useParams();
    const { store } = useGlobalReducer();

    const personaje = store.personajes.find(personaje => personaje.id === parseInt(id));

    if (!personaje) return <p>Personaje no encontrado</p>;


    return (
        <div className="card-personaje-detalle">
            <h1 className="nombre-personaje">{personaje.name}</h1>
            <img src={personaje.image} alt={personaje.name} className="imagen-personaje" />

            <div className="info-personaje">
                <p><strong>Raza:</strong> {personaje.race}</p>
                <p><strong>Género:</strong> {personaje.gender}</p>
                <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
                <p><strong>Ki actual:</strong> {personaje.ki}</p>
                <p><strong>Ki máximo:</strong> {personaje.maxKi}</p>
                <p><strong>Descripción:</strong> {personaje.description}</p>
            </div>

                <Link to="/" className="boton-cartas mt-2">
                    🔥 Volver a Inicio
                </Link>

        </div>


    )
}