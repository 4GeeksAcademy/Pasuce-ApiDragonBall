import React, { useEffect } from "react";
import { CardPlanetas } from "./CardPlanetas";
import { getPlanetas } from "../pages/serviceAPI";
import { useGlobalReducer } from "../hooks/useGlobalReducer";



export const ListaPlanetas = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getPlanetas(dispatch)
    }, []);

    const handleAddFavorito = (planeta) => {

        dispatch({ type: "addFavorito", payload: planeta });
    };

    const gruposDeCuatro = [];
    for (let i = 0; i < store.planetas.length; i += 4) {
        gruposDeCuatro.push(store.planetas.slice(i, i + 4));
    }

    return (
        <div id="carouselPlanetas" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                {gruposDeCuatro.map((grupo, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>

                        <div className="d-flex justify-content-center gap-4">
                            {grupo.map((planeta) => (
                                <CardPlanetas
                                    key={planeta.id}
                                    planeta={planeta}
                                    onAddFavorito={handleAddFavorito} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>



            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselPlanetas"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselPlanetas"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

