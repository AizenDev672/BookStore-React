import { useId } from "react";
import { BookItems } from "../book-items";
import { useList } from "../../hooks/useList";
import "./List.css";

const WarningEmpty = () => {
  return (
    <>
      <span className="warning-empty">No hay libros en la lista!</span>
    </>
  );
};

export function List() {
  const listCheckBoxId = useId();
  const { list, clearList, removeFromList } = useList();
  return (
    <>
      <label className="list-button" htmlFor={listCheckBoxId}>
        <i className="fa-solid fa-table-list"></i>
      </label>
      <input id={listCheckBoxId} type="checkbox" hidden />
      <aside className="list transition-list">
        <ul>
          {list.map((book, index) => (
            <BookItems
              key={index}
              removeFromList={() => removeFromList(book)}
              {...book}
            />
          ))}
        </ul>
        {list.length > 0 ? (
          <button type="button" className="btn-delete" onClick={clearList}>
            <i className="fa-solid fa-trash"></i>
          </button>
        ) : (
          <WarningEmpty />
        )}
      </aside>
    </>
  );
}
