import { useContext } from "react";
import { ListContext } from "../context/list";

export const useList = () => {
    const context = useContext(ListContext);

    if(context === undefined){
        throw new Error("UseList must be used within a CartProvider");
    }

    return context;
};