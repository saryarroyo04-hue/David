import { useRef } from "react";

export default function BotonConRef(){
    const botonRef = useRef(null);

    const manejarClic = () => {
        botonRef.current?.focus();
        console.log('Ancho del boton:', botonRef.current?.offsetWidth);

    };

    return(
        <button ref={botonRef} onClick={manejarClic}>
            Hacer click
        </button>
    );
}
