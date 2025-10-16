import React from "react";
import "./Style.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import { DataContextProvider } from "./context/DataContext";
import Resumo from "./pages/Resumo";

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
