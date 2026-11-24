
import { NavLink } from "react-router-dom";

function NavbarSuperAdmin() {
  return (
    <div className="menu">

      <NavLink to="/superadmin">
        🏠 Inicio
      </NavLink>

      <NavLink to="/usuarios">
        👥 Usuarios
      </NavLink>

      <NavLink to="/administradores">
        🛡️ Admins
      </NavLink>

      <NavLink to="/configuracion">
        ⚙️ Ajustes
      </NavLink>

    </div>
  );
}

export default NavbarSuperAdmin;
