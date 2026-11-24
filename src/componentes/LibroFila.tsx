type LibroFilaProps = {
  titulo: string;
  autor: string;
  tema: string;
  portada: string;
  clase: string;
};

function LibroFila({ titulo, autor, tema, portada, clase }: LibroFilaProps) {
  return (
    <article className="card">
      <div className={`card-portada ${clase}`}>{portada}</div>
      <div className="card-texto">
        <h3>{titulo}</h3>
        <p>{autor}</p>
        <small>{tema}</small>
      </div>
      <div className="card-boton">
        <span>◎ Disponible</span>
        <button type="button">Alquilar →</button>
      </div>
    </article>
  );
}

export default LibroFila;
