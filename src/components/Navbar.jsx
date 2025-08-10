import { Link } from "react-router-dom";
import { useGlobalReducer } from "../hooks/useGlobalReducer";


export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleRemove = (item) => {
    dispatch({ type: "removeFavorito", payload: item });
  };

  return (
    <nav className="navbar navbar-dark bg-dark mb-3 px-4">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Dragon_Ball_Z_logo.svg"
            alt="Dragon Ball Logo"
            style={{ height: "100px", width: "200px" }}
          />
        </Link>

        <div className="dropdown ms-auto">
          <button
            type="button"
            className="boton-favoritos"
            id="botonFavoritos"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({store.favoritos.length})
          </button>

          <ul className="dropdown-menu dropdown-menu-end " >
            {store.favoritos.length === 0 ? (
              <li>
                <span className="dropdown-item-text">Sin favoritos </span></li>)
              : (store.favoritos.map((item) => (
                <li key={item.id} className="d-flex justify-content-between align-items-center px-3">
                  <Link className="dropdown-item" to={`/single/${item.id}`}>
                    {item.name}
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => handleRemove(item)}
                  >
                    🗑️
                  </button>
                </li>
              ))
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
};





