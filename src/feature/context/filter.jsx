import { createContext, useState } from "react";

// 1. Creat el Contexto
export const FiltersContext = createContext();

// 2. Crear el Provider, para proveer el Contexto
export function FiltersProvider ({ children }){
    const [ filters, setFilters ] = useState({
        genre: "All",
        minPages: 100
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters}}>
            { children }
        </FiltersContext.Provider>
    );
}