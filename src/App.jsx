import { useState } from "react";
import { fetchData } from "./feature/utils/fetchData";
import { Header } from "./feature/shared/header";
import { Footer } from "./feature/shared/footer";
import { Home } from "./feature/book/home";
import { IS_DEVELOPMENT  } from "./config";
import { useFilters } from "./feature/hooks/useFilters";
import { ListProvider } from "./feature/context/list";
import "./App.css";

const apiData = fetchData("http://localhost:3000/books");


function App() {
  const data = apiData.read();
  const { filterBooks } = useFilters();

  const filteredBooks = filterBooks(data);
  return (
    <ListProvider>
      <Header/>
      <Home books={filteredBooks} />
      { IS_DEVELOPMENT  &&  <Footer /> }
    </ListProvider>
  );
}

export default App;
