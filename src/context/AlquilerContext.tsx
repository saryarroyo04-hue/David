import { createContext, useContext, useState, type ReactNode } from "react";
import type { LibroInfo } from "../componentes/libros";

type AlquilerContextValue = {
  libroSeleccionado: LibroInfo | null;
  seleccionarLibro: (libro: LibroInfo) => void;
  limpiarSeleccion: () => void;
};

const AlquilerContext = createContext<AlquilerContextValue | undefined>(undefined);

export function AlquilerProvider({ children }: { children: ReactNode }) {
  const [libroSeleccionado, setLibroSeleccionado] = useState<LibroInfo | null>(null);

  return (
    <AlquilerContext.Provider
      value={{
        libroSeleccionado,
        seleccionarLibro: setLibroSeleccionado,
        limpiarSeleccion: () => setLibroSeleccionado(null),
      }}
    >
      {children}
    </AlquilerContext.Provider>
  );
}

export function useAlquiler() {
  const context = useContext(AlquilerContext);
  if (!context) {
    throw new Error("useAlquiler debe usarse dentro de AlquilerProvider");
  }
  return context;
}
