import React from "react";
import { IVenda } from "../context/DataContext";
import { formatCurrency } from "../helpers/formatCurrency";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <a
        href=""
        style={{
          fontFamily: "monospace",
        }}
      >
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>{formatCurrency(venda.preco)}</div>
    </div>
  );
};

export default VendaItem;
