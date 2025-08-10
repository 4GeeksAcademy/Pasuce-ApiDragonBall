
import React, { useEffect } from "react";
import { CardPersonaje } from "./CardPersonaje";
import { getPersonajes } from "../pages/serviceAPI";
import { useGlobalReducer } from "../hooks/useGlobalReducer";


export const ListaPersonajes = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getPersonajes(dispatch)
    }, []);

    const handleAddFavorito = (personajes) => {
        dispatch({ type: "addFavorito", payload: personajes });
    };

    const gruposDeCuatro = [];
    for (let i = 0; i < store.personajes.length; i += 4) {
        gruposDeCuatro.push(store.personajes.slice(i, i + 4));
    }

    return (
        <div id="carouselPersonajes" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                {gruposDeCuatro.map((grupo, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <div className="d-flex justify-content-center gap-4">
                            {grupo.map((personaje) => (
                                <CardPersonaje
                                    key={personaje.id}
                                    personaje={personaje}
                                    onAddFavorito={handleAddFavorito} />
                            ))}
                        </div>
                    </div>
                ))}

            </div>


            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselPersonajes"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselPersonajes"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

