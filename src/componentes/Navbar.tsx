
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="menu">
      <NavLink to="/inicio">🏠 Inicio</NavLink>
      <NavLink to="/Buscar">🔍 Buscar</NavLink>
      <NavLink to="/prestamos">📖 Préstamos</NavLink>
      <NavLink to="/perfil">👤 Perfil</NavLink>
    </div>
  );
}

export default Navbar;
