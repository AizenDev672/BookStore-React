import { useList } from "../../hooks/useList";
import "./Home.css";

export function Home({ books }) {
  const { addToList, list, removeFromList } = useList();

  const checkBookInList = (book) => {
    return list.some((item) => item.id === book.id);
  };
  return (
    <main className="books">
      <ul>
        {books.slice(0, 8).map((book) => {
          const isBookInList = checkBookInList(book);
          return (
            <li key={book.id}>
              <img src={book.photo} alt={book.title} />
              <div>
                <strong>{book.title}</strong> - {book.author}
              </div>
              <div>
                <button
                    style={{ backgroundColor: isBookInList ? "#e63946" : "#003554" }}
                  type="button"
                  onClick={() => {
                    isBookInList ? removeFromList(book) : addToList(book);
                  }}
                >
                  {isBookInList ? (
                    <i className="fa-solid fa-trash"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
