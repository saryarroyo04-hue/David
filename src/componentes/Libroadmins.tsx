
type LibroAdminProps = {
  titulo: string;
  autor: string;
  tema: string;
  portada: string;
  clase: string;
};

function Libroadmins({
  titulo,
  autor,
  tema,
  portada,
  clase
}: LibroAdminProps) {

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
        <span>◎ Disponible</span>
        <button type="button">Editar →</button>
      </div>

    </article>
  );
}

export default Libroadmins;
