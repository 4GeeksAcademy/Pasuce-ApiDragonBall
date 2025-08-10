export const initialStore = () => {

  return {
    personajes: [],
    planetas: [],
    favoritos: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "setPersonajes":
      return {
        ...store,
        personajes: action.payload,
      };

    case "setPlanetas":
      return {
        ...store,
        planetas: action.payload,
      };


    case "addFavorito":
      if (store.favoritos.find(item => item.name === action.payload.name)) {
        return store; 
      }
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload],
      };

    case "removeFavorito":
      return {
        ...store,
        favoritos: store.favoritos.filter(
          item => item.name !== action.payload.name
        ),
      };





    default:
      throw Error("Unknown action.");
  }






}
