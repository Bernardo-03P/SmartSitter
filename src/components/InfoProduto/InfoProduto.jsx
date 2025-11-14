import React, { useState } from "react";
import "./InfoProduto.css";

function InfoProduto() {
  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuir = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  return (
    <div className="info-produto-container">

      <h1 className="titulo-produto">
        Aparelho Inteligente<br />SmartSitter
      </h1>

      <div className="estrelas">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      <div className="preco-area">
        <p className="preco">R$000,00</p>
        <p className="parcelamento">Ou x vezes de R$00,00</p>
      </div>

      <ul className="lista-descricao">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
      </ul>

      <div className="compra-area">

        <div className="contador">
          <button onClick={diminuir}>-</button>
          <span>{quantidade}</span>
          <button onClick={aumentar}>+</button>
        </div>

        <button className="btn-comprar">Comprar</button>
      </div>

    </div>
  );
}

export default InfoProduto;
