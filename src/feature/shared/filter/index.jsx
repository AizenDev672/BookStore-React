import { useId } from "react";
import { List } from "../../book/list";
import { useFilters } from "../../hooks/useFilters";
import "./Filters.css";

export function Filters(){
    const { setFilters, filters } = useFilters();
    const minPagesFilterId = useId();
    const genreFilterId = useId();

    const handleChangeMinPages = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPages: event.target.value
        }))
    };

    const handleChangeGenre = (event) => {
        setFilters(prevState => ({
            ...prevState,
            genre: event.target.value
        }))
    };

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPagesFilterId}>Paginas</label>
                <input 
                    type="range"
                    id={minPagesFilterId}
                    min="0"
                    max="5000"
                    onChange={handleChangeMinPages}
                    value={filters.minPages}
                />
                <span>{filters.minPages}</span>
            </div>
            <div>
                <label htmlFor={genreFilterId}>Genero</label>
                <select id={genreFilterId} onChange={handleChangeGenre}>
                    <option value="All">Todos</option>
                    <option value="Fantasia">Fantasia</option>
                    <option value="Romance">Romance</option>
                    <option value="Ciencia ficcion">Ciencia ficcion</option>
                </select>
            </div>
            <div>
                <List />
            </div>
        </section>
    );
}