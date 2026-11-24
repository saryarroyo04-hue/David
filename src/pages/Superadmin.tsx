import "../styles/SuperAdmin.css";
import NavbarSuperAdmin from "../componentes/NavbarSuperAdmin";
import Libroadmin from "../componentes/Libroadmin";
import { Link } from "react-router-dom";

function SuperAdmin() {
  return (
    <>
     <div className="super-contenedor">
      <div className="super-header">
        <div className="marca-con-login">
          <p className="super-logo">📘 Biblioteca</p>
          <Link className="login-bajo-logo" to="/">Login</Link>
        </div>
      </div>

      <div className="super-lista">

  <h2>Gestionar libros</h2>

  <Libroadmin
    titulo="Atomic Habits"
    autor="James Clear"
    tema="Hábitos · Desarrollo personal"
    portada="Atomic Habits"
    clase="atomic"
  />

  <Libroadmin
    titulo="El Alquimista"
    autor="Paulo Coelho"
    tema="Ficción · Espiritualidad"
    portada="El Alquimista"
    clase="alquimista"
  />

  <Libroadmin
    titulo="Clean Code"
    autor="Robert C. Martin"
    tema="Tecnología · Programación"
    portada="Clean Code"
    clase="clean"
  />

      </div>
     </div>
      <NavbarSuperAdmin />
    </>
  );
}

export default SuperAdmin;
