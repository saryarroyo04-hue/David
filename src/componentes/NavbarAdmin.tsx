import { NavLink } from "react-router-dom";

function NavbarAdmin() {
  return (
    <div className="menu">

      <NavLink to="/admin">🏠 Inicio</NavLink>

      <NavLink to="/libros-admin">📚 Libros</NavLink>

      <NavLink to="/prestamos-admin">📖 Préstamos</NavLink>

      <NavLink to="/inventario">📦 Inventario</NavLink>

    </div>
  );
}

export default NavbarAdmin;
