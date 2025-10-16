import React from "react";
import "./Style.css";
import Resumo from "./pages/resumo";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
};

export default App;
