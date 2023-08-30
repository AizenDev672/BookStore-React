import { createContext, useReducer  } from "react";
import { listReducer, listInitialState } from "../reducers/list";

export const ListContext = createContext();


function useListReducer(){
    const [ state, dispatch ] = useReducer(listReducer, listInitialState);

    const addToList = book => dispatch({
        // const bookInListIndex = list.findIndex(item => item.id === book.id);
        // if(bookInListIndex >= 0){
        //     const newList = structuredClone(list);
        //     newList[bookInListIndex].quantity += 1;
        //     setList(newList);
        // }
        type: "ADD_TO_LIST",
        payload: book
       
    })

    const clearList = () => dispatch({
        type: "CLEAR_LIST"
    })

    const removeFromList = book => dispatch({
        type: "REMOVE_FROM_LIST",
        payload: book
    })

    return { state, addToList, removeFromList, clearList };



}

export function ListProvider({ children }){
    const { state, addToList, removeFromList, clearList } = useListReducer();
    return(
        <ListContext.Provider value={{ list: state,addToList, clearList, removeFromList }}>
            { children }
        </ListContext.Provider>
    );
}