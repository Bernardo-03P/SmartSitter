import React, { useState } from "react";
import "./CarroselProduto.css";

function CarroselProduto() {
  const slides = [1, 2, 3, 4, 5, 6]; 
  const [index, setIndex] = useState(0);

  return (
    <div className="carrosel-container">
      <div className="carrosel-slide">
        <div className="fake-img"></div>
      </div>

      <div className="carrosel-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarroselProduto;
