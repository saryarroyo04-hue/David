export type LibroInfo = {
  id: number;
  titulo: string;
  autor: string;
  tema: string;
  portada: string;
  clase: string;
  descripcion: string;
  formato: string;
  idioma: string;
  prestamo: string;
  calificacion: string;
  resenas: string;
};

export const LIBROS: LibroInfo[] = [
  { id: 1,
    titulo: "Atomic Habits",
    autor: "James Clear", 
    tema: "Hábitos · Desarrollo personal", 
    portada: "Atomic Habits", 
    clase: "atomic", 
    descripcion: "Un método sencillo y comprobado para construir hábitos buenos, romper los malos y conseguir resultados extraordinarios. Pequeños cambios que generan grandes resultados.", 
    formato: "Físico", 
    idioma: "Español", 
    prestamo: "3 días", 
    calificacion: "4.8", 
    resenas: "1.2k reseñas" 
  },


  { id: 2,
    titulo: "El Alquimista", 
    autor: "Paulo Coelho", 
    tema: "Ficción · Espiritualidad", 
    portada: "El Alquimista", 
    clase: "alquimista", 
    descripcion: "La aventura de Santiago, un joven pastor que emprende un viaje en busca de un tesoro y descubre el valor de escuchar sus sueños.", 
    formato: "Físico", 
    idioma: "Español", 
    prestamo: "7 días", 
    calificacion: "4.7", 
    resenas: "980 reseñas" 
  },


  { id: 3, 
    titulo: "Clean Code", 
    autor: "Robert C. Martin", 
    tema: "Tecnología · Programación", 
    portada: "Clean Code", 
    clase: "clean", 
    descripcion: "Una guía práctica para escribir código legible, mantenerlo con confianza y mejorar la calidad del software día a día.", 
    formato: "Físico", 
    idioma: "Inglés", 
    prestamo: "5 días", 
    calificacion: "4.6", 
    resenas: "760 reseñas" },
];
