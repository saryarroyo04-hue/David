
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const usuarios = [
    {
      correo: "superadmin@gmail.com",
      contrasena: "123456",
      rol: "superadmin"
    },
    {
      correo: "admin@gmail.com",
      contrasena: "123456",
      rol: "admin"
    },
    {
      correo: "user@gmail.com",
      contrasena: "123456",
      rol: "user"
    }
  ];

  const iniciarSesion = () => {
    const usuario = usuarios.find(
      (u) =>
        u.correo === correo &&
        u.contrasena === contrasena
    );

    if (!usuario) {
      setError("Correo o contraseña incorrectos");
      return;
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

    if (usuario.rol === "superadmin") {
      navigate("/superadmin");
    } else if (usuario.rol === "admin") {
      navigate("/admin");
    }
    else if (usuario.rol === "user") {
      navigate("/inicio");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>📚 Biblioteca</h1>
        <h2>Iniciar sesión</h2>
        <p>Ingresa tus datos para continuar</p>

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          placeholder="Escribe tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label htmlFor="contrasena">Contraseña</label>
        <input
          id="contrasena"
          type="password"
          placeholder="Escribe tu contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button type="button" onClick={iniciarSesion} >
          Entrar
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p className="login-register">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
