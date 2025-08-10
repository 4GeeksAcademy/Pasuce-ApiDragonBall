export const getPersonajes = async (dispatch) => {
    const response = await fetch("https://dragonball-api.com/api/characters", {
        method: "GET"

    })
    const data = await response.json()

    dispatch({
        type: "setPersonajes", 
        payload: Array.isArray(data.items) ? data.items : []
    });

}

 
export const getPlanetas = async (dispatch) => {
    const response = await fetch("https://dragonball-api.com/api/planets", {
        method: "GET"

    })
    const data = await response.json()
    dispatch({
        type: "setPlanetas", 
        payload: Array.isArray(data.items) ? data.items : []
    });
    
   

}

 


