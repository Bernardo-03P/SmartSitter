import React from "react";
import "./Rodape.css";
import LogoF from "../../assets/img/LogoFooter.png"; 

function Rodape() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-text">
          <img src={LogoF} alt="Logo SmartSitter" className="footer-logo" />
        </div>
        <p className="footer-copy">
          Copyright © SmartSitter. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;

