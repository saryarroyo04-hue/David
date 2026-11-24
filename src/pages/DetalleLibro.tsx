import Navbar from "../componentes/Navbar";
import "../styles/DetalleLibro.css";
import { useAlquiler } from "../context/AlquilerContext";

function DetalleLibro() {
  const { libroSeleccionado: libro, limpiarSeleccion } = useAlquiler();

  if (!libro) return null;

  return (
    <>
      <main className="detalle-app">
        <section className="detalle-portada-fondo">
          <button className="detalle-volver" type="button" onClick={limpiarSeleccion}>
            ‹
          </button>
          <div className={`detalle-portada ${libro.clase}`}>
            <span className="detalle-portada-titulo">{libro.portada}</span>
            <small>{libro.autor}</small>
          </div>
          <span className="detalle-disponibilidad">● Disponible</span>
        </section>

        <section className="detalle-contenido">
          <h1>{libro.titulo}</h1>
          <p className="detalle-autor">{libro.autor}</p>
          <div className="detalle-rating">
            <span>★★★★★</span> {libro.calificacion} <small>({libro.resenas})</small>
          </div>
          <div className="detalle-etiquetas">
            <span>{libro.tema}</span>
          </div>
          <h2>Descripción</h2>
          <p className="detalle-descripcion">{libro.descripcion}</p>
          <div className="detalle-datos">
            <div><span>▦</span><small>Préstamo por</small><strong>{libro.prestamo}</strong></div>
            <div><span>▣</span><small>Formato</small><strong>{libro.formato}</strong></div>
            <div><span>♧</span><small>Idioma</small><strong>{libro.idioma}</strong></div>
          </div>
          <button className="detalle-solicitar" type="button">
            Solicitar libro →
          </button>
        </section>
      </main>
      <Navbar />
    </>
  );
}

export default DetalleLibro;
