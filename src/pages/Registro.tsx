import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Registro() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>📚 Biblioteca</h1>
        <h2>Crear una cuenta</h2>
        <p>Regístrate para comenzar a leer</p>

        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="Escribe tu nombre" />

        <label htmlFor="correo-registro">Correo electrónico</label>
        <input id="correo-registro" type="email" placeholder="Escribe tu correo" />

        <label htmlFor="contrasena-registro">Contraseña</label>
        <input id="contrasena-registro" type="password" placeholder="Crea una contraseña" />

        <button type="button" onClick={() => navigate("/")}>Crear cuenta</button>

        <p className="login-register">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
