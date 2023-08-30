import { useContext } from "react";
import { FiltersContext } from "../context/filter.jsx";

export function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext);

    const filterBooks = (books) => {
        return books.filter(book => {
            return (
                book.numPages >= filters.minPages && (
                    filters.genre === "All" ||
                    book.genre === filters.genre
                )
            )
        })
    };

    return { filters, filterBooks, setFilters };
}