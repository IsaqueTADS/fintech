import React from "react";
import "./Style.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import { DataContextProvider } from "./context/DataContext";
import Resumo from "./pages/Resumo";
import Vendas from "./pages/Vendas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from "./pages/Venda";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
