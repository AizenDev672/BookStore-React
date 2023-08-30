import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./feature/context/filter";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
);
