import "./../styles/Pares.css";
import LibroFila from "../componentes/LibroFila";
import Navbar from "../componentes/Navbar";
import { Link } from "react-router-dom";

function Pares() {
  return (
    <>
    <div className="contenedor">
      
      <div className="header">
        <div className="marca-con-login">
          <p className="logo">📘 Biblioteca</p>
          <Link className="login-bajo-logo" to="/">Login</Link>
        </div>
        <div className="header-der">
          <p>🔔</p>
          <img src="public/images (1).jpg" alt="perfil"/>
        </div>
      </div>

      <div className="hero">
        <div>
          <h1>Alquila tu <br/> próximo libro</h1>
          <p>Descubre historias, aprende nuevas ideas y disfruta la lectura.</p>
        </div>
        <img className="libro-img" src="/libros.svg" alt="Pila de libros abiertos" />
      </div>

      <div className="lista">
        <div className="lista-top">
          <h2>Libros disponibles</h2>
          <a href="#">Ver todos (3)</a>
        </div>

        <LibroFila 
         titulo="Atomic Habits"
         autor="James Clear" 
         tema="Hábitos · Desarrollo personal" 
         portada="Atomic Habits" 
         clase="atomic"
         />

        <LibroFila
         titulo="El Alquimista" 
         autor="Paulo Coelho" 
         tema="Ficción · Espiritualidad" 
         portada="El Alquimista" 
         clase="alquimista"
          />

        <LibroFila 
         titulo="Clean Code" 
         autor="Robert C. Martin" 
         tema="Tecnología · Programación" 
         portada="Clean Code" 
         clase="clean" 
         />
      </div>

    </div>
    <Navbar />
    </>
  );
}


export default Pares;
