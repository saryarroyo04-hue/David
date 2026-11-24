
import "../styles/Admin.css";
import NavbarAdmin from "../componentes/NavbarAdmin";
import Libroadmins from "../componentes/Libroadmins";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="admin-contenedor">

        <div className="admin-header">
          <div className="admin-header-izq">
            <p className="admin-logo">📘 Biblioteca</p>
            <Link className="admin-login-link" to="/">Login</Link>
          </div>

          <div className="admin-header-der">
            <p>🔔</p>
            <img src="/images (1).jpg" alt="perfil" />
          </div>
        </div>

        <div className="admin-hero">
          <div>
            <h1>Panel de <br /> Administrador</h1>
            <p>Gestiona los libros y préstamos de la biblioteca.</p>
          </div>

          <span className="admin-icono">📚</span>
        </div>

        <div className="admin-lista">

          <h2>Resumen general</h2>

          <div className="admin-estadisticas">

            <div className="admin-card">
              <span>📚</span>
              <h3>3</h3>
              <p>Total de libros</p>
            </div>

            <div className="admin-card">
              <span>🟢</span>
              <h3>3</h3>
              <p>Libros disponibles</p>
            </div>

            <div className="admin-card">
              <span>📖</span>
              <h3>0</h3>
              <p>Préstamos activos</p>
            </div>

            <div className="admin-card">
              <span>👥</span>
              <h3>1</h3>
              <p>Usuarios</p>
            </div>

          </div>

          <h2>Libros de la biblioteca</h2>

          <Libroadmins
            titulo="Atomic Habits"
            autor="James Clear"
            tema="Hábitos · Desarrollo personal"
            portada="Atomic Habits"
            clase="atomic"
          />

          <Libroadmins
            titulo="El Alquimista"
            autor="Paulo Coelho"
            tema="Ficción · Espiritualidad"
            portada="El Alquimista"
            clase="alquimista"
          />

          <Libroadmins
            titulo="Clean Code"
            autor="Robert C. Martin"
            tema="Tecnología · Programación"
            portada="Clean Code"
            clase="clean"
          />

          <h2>Préstamos recientes</h2>

        </div>

      </div>
          
   

      <NavbarAdmin />
    </>
  );
}

export default Admin;
