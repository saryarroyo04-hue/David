import type { LibroInfo } from "./libros";

type LibroProps = {
  libro: LibroInfo;
  alAlquilar: () => void;
};

function Libro({ libro, alAlquilar }: LibroProps) {
  return (
    <div className="libro">
      <div className={`portada ${libro.clase}`}>{libro.portada}</div>
      <h4>{libro.titulo}</h4>
      <p className="autor">{libro.autor}</p>
      <p className="tema">{libro.tema}</p>
      <span className="disponible">● Disponible</span>
      <button className="alquilar" type="button" onClick={alAlquilar}>
        Alquilar
      </button>
    </div>
  );
}

export default Libro;
