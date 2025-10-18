import React from "react";
import { IVenda } from "../context/DataContext";
import { formatCurrency } from "../helpers/formatCurrency";
import { NavLink } from "react-router-dom";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink
        to={`/vendas/${venda.id}`}
        style={{
          fontFamily: "monospace",
        }}
      >
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>{formatCurrency(venda.preco)}</div>
    </div>
  );
};

export default VendaItem;
