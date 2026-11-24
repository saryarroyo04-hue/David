
function Buscador() {
    return (
        <div className="buscador">

            <span>⌕</span>

            <input
                type="text"
                placeholder="Buscar por título, autor o tema..."
            />

            <span className="filtro">☷</span>

        </div>
    );
}

export default Buscador;
