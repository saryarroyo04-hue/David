import "./../styles/Buscar.css";
import Navbar from "../componentes/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import DetalleLibro from "./DetalleLibro";
import Libro from "../componentes/Libro";
import { LIBROS } from "../componentes/libros";
import { useAlquiler } from "../context/AlquilerContext";

function Buscar() {
  const [busqueda, setBusqueda] = useState("");
  const { libroSeleccionado, seleccionarLibro } = useAlquiler();

  if (libroSeleccionado) {
    return <DetalleLibro />;
  }

  const librosFiltrados = LIBROS.filter((libro) => {
    const texto = busqueda.toLowerCase();
    return (
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto) ||
      libro.tema.toLowerCase().includes(texto)
    );
  });

  return (
    <>
      <div className="app">
        <div className="marca-con-login">
          <p className="logo">📘 Biblioteca</p>
          <Link className="login-bajo-logo" to="/">Login</Link>
        </div>

        <header>
          <h2>Explorar libros</h2>
          <p>Encuentra tu próxima gran lectura</p>
        </header>

        <div className="buscador">
          <span>⌕</span>


          <input
            type="text"
            placeholder="Buscar por título, autor o tema..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />

          <span className="filtro">☷</span>
        </div>

        <div className="categorias">
          <button className="activo">Todos</button>
          <button>Disponibles</button>
          <button>Más leídos</button>
        </div>


        <main className="libros">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map((libro) => (
              <Libro
                key={libro.id}
                libro={libro}
                alAlquilar={() => seleccionarLibro(libro)}
              />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </main>
      </div>
      <Navbar />
    </>
  );
}

export default Buscar;
