// import { useFilters } from "../../hooks/useFilters";
// import { useList  } from "../../hooks/useList";
import "./Footer.css";

export function Footer(){
    // const {  filters } = useFilters();
    // const { list } = useList();
    return(
        <footer className="footer">
            {/* {
                JSON.stringify(filters, null,2)
            } */}
            {/* {
                JSON.stringify(list, null, 2)
            } */}
            <h4>Prueba tecnica de React *</h4>
            <span>🧔‍♂️ @DidierDev672</span>
            <h5>Book Store 📚 con useContext & useReducer</h5>
        </footer>
    );
}