import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./InfoProduto.css";

function InfoProduto() {
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState(null); 
  const [loading, setLoading] = useState(true);

  // LOG 1: Ver o estado do produto a cada renderização
  console.log("Componente renderizou. Estado 'produto' atual:", produto);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        console.log("useEffect iniciado: Buscando dados da API..."); // LOG 2
        const response = await axios.get('http://localhost:3001/api/products/1');
        
        // LOG 3: Ver exatamente o que a API retornou
        console.log("Sucesso! Dados recebidos da API:", response.data); 
        
        setProduto(response.data); // Atualiza o estado com os dados recebidos

      } catch (error) {
        // LOG 4: Capturar qualquer erro na chamada da API
        console.error("ERRO ao buscar produto:", error);
        
      } finally {
        console.log("useEffect finalizado: 'loading' será false."); // LOG 5
        setLoading(false); 
      }
    };

    fetchProduto();
  }, []); 

  const aumentar = () => setQuantidade(quantidade + 1);
  const diminuir = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  // ----- Lógica de Renderização Condicional -----
  // É por causa destas linhas que você vê o conteúdo estático.

  if (loading) {
    console.log("Renderizando: Estado de Carregamento (loading = true)");
    return <div className="info-produto-container"><p>Carregando produto...</p></div>;
  }

  if (!produto) {
    console.log("Renderizando: Produto não encontrado (!produto = true)");
    return <div className="info-produto-container"><p>Produto não encontrado ou erro ao carregar.</p></div>;
  }

  // Se tudo deu certo, esta parte será renderizada com os dados da API
  console.log("Renderizando: Produto carregado com sucesso. Nome:", produto.nome);
  return (
    <div className="info-produto-container">
      {/* Estes valores agora vêm do estado 'produto' */}
      <h1 className="titulo-produto">{produto.nome}</h1>

      <div className="estrelas">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      <div className="preco-area">
        <p className="preco">R${parseFloat(produto.preco).toFixed(2).replace('.', ',')}</p>
        <p className="parcelamento">Ou 10x de R${(produto.preco / 10).toFixed(2).replace('.', ',')}</p>
      </div>

      <ul className="lista-descricao">
        {/* Adicionamos uma verificação para garantir que 'detalhes' é um array */}
        {Array.isArray(produto.detalhes) ? produto.detalhes.map((item, index) => (
          <li key={index}>{item}</li>
        )) : <p>Sem detalhes disponíveis.</p>}
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