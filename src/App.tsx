import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Pares";
import Buscar from "./pages/Buscar";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SuperAdmin from "./pages/Superadmin";
import Admin from "./pages/Admin";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Buscar" element={<Buscar />} />
        <Route path="/superadmin" element={<SuperAdmin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
  );
}

export default App;
