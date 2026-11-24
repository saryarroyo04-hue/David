type LibroAdminProps = {
  titulo: string;
  autor: string;
  tema: string;
  portada: string;
  clase: string;
};

function Libroadmin({ titulo, autor, tema, portada, clase }: LibroAdminProps) {
  return (
    <article className="card">
      <div className={`card-portada ${clase}`}>
        {portada}
      </div>

      <div className="card-texto">
        <h3>{titulo}</h3>
        <p>{autor}</p>
        <small>{tema}</small>
      </div>

      <div className="card-boton">
        <button type="button">Editar</button>
        <button type="button">Eliminar</button>
      </div>
    </article>
  );
}

export default Libroadmin;
