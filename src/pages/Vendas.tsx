import React from "react";
import { useData } from "../context/DataContext";
import VendaItem from "../components/VendaItem";

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}><VendaItem venda={item} /> </li>
      ))}
    </ul>
  );
};

export default Vendas;
