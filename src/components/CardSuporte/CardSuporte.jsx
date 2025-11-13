import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link2 } from "lucide-react";
import "./CardSuporte.css";

function CardSuporte() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) previewImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) previewImage(file);
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="suporte-bg">
      <Container fluid className="suporte-container">
        <h1>Suporte</h1>
        <form className="card-suporte">
          <label htmlFor="assunto">Assunto</label>
          <select id="assunto" name="assunto">
            <option value="">Selecione o assunto</option>
            <option value="suporte">Produto com defeito</option>
            <option value="financeiro">Dúvida</option>
            <option value="outros">Outros</option>
          </select>

          <label htmlFor="TituloSuporte">Título</label>
          <input type="text" id="TituloSuporte" name="TituloSuporte" autoComplete="off" />

          <label htmlFor="MensagemSuporte">Mensagem</label>
          <textarea id="MensagemSuporte" name="MensagemSuporte" autoComplete="off"></textarea>

          <div
            className={`upload-box ${isDragOver ? "dragover" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("imagem").click()}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="preview-img" />
            ) : (
              <div className="upload-text">
                <Link2 className="upload-icon" />
                <p>Selecione ou arraste uma imagem</p>
              </div>
            )}
            <input
              type="file"
              id="imagem"
              name="imagem"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit">Concluir</button>
        </form>
      </Container>
    </div>
  );
}

export default CardSuporte;