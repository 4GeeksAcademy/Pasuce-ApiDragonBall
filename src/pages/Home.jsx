import { useEffect } from "react";
import { getPersonajes, getPlanetas } from "./serviceAPI.js";
import { ListaPersonajes } from "../components/ListaPersonajes.jsx";
import { ListaPlanetas } from "../components/ListaPlanetas.jsx";
import { useGlobalReducer } from "../hooks/useGlobalReducer.jsx";





export const Home = () => {

    const { store, dispatch, actions } = useGlobalReducer();
    useEffect(() => {
        getPersonajes(dispatch);
        getPlanetas(dispatch);


    }, [dispatch])


    return (
        <>
            <div>
                
                <h1>🔥 Bienvenido al Universo Dragon Ball</h1>
                <ListaPersonajes />
                <ListaPlanetas />
                
            </div>
        </>
    );
}; 