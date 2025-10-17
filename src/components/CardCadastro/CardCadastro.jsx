import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import '../CardCadastro/CardCadastro.css';
import { useNavigate } from 'react-router-dom';

function CardCadastro() {
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState(1);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    control 
  } = useForm();

  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const aoDigitar = (evento) => {
    const { name, value } = evento.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const irParaProximaEtapa = (data) => {
    console.log("Dados validados:", data);
    setEtapa(2);
  };

  const enviarFormulario = (data) => {
    console.log('Dados enviados:', data);
    navigate('/home');
  };

  const handleSair = () => {
    navigate('/login'); 
  };

  return (
    <div className="cadastro-bg">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5} xl={4}>
            <div className="cadastro-card">
              <h1>Criar Conta</h1>

              {etapa === 1 ? (
                <form onSubmit={handleSubmit(irParaProximaEtapa)}>
                  <div className="form-group"> 
                    <label htmlFor="nome">Nome</label>
                    <input
                      {...register("nome", { required: true, maxLength: 50 })}
                      type="text"
                      placeholder="Digite aqui seu nome"
                      id="nome"
                      name="nome"
                      value={dadosFormulario.nome}
                      onChange={aoDigitar}
                      autoComplete="off"
                    />
                    {errors.nome && (
                      <span style={{ color: 'red', fontSize: '14px' }}>
                        Por favor, preencha o nome.
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input
                      {...register("sobrenome", { required: true })}
                      type="text"
                      placeholder="Digite aqui seu sobrenome"
                      id="sobrenome"
                      name="sobrenome"
                      value={dadosFormulario.sobrenome}
                      onChange={aoDigitar}
                      autoComplete="off"
                    />
                    {errors.sobrenome && (
                      <span style={{ color: 'red', fontSize: '14px' }}>
                        Por favor, preencha o sobrenome.
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Data de nascimento</label>
                    <div className="data-niver" style={{ display: "flex", gap: "8px" }}>
                      <div>
                        <Controller
                          name="dia"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Informe o dia",
                            min: { value: 1, message: "Dia inválido" },
                            max: { value: 31, message: "Dia inválido" },
                            minLength: { value: 1, message: "Dia inválido" },
                            maxLength: { value: 2, message: "Máximo 2 dígitos" }
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Dia"
                              maxLength="2"
                              inputMode="numeric"
                              onChange={e => field.onChange(e.target.value.replace(/\D/g, ""))}
                            />
                          )}
                        />
                        {errors.dia && <span style={{ color: "red", fontSize: 12 }}>{errors.dia.message}</span>}
                      </div>
                      <div>
                        <Controller
                          name="mes"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Informe o mês",
                            min: { value: 1, message: "Mês inválido" },
                            max: { value: 12, message: "Mês inválido" },
                            minLength: { value: 1, message: "Mês inválido" },
                            maxLength: { value: 2, message: "Máximo 2 dígitos" }
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Mês"
                              maxLength="2"
                              inputMode="numeric"
                              onChange={e => field.onChange(e.target.value.replace(/\D/g, ""))}
                            />
                          )}
                        />
                        {errors.mes && <span style={{ color: "red", fontSize: 12 }}>{errors.mes.message}</span>}
                      </div>
                      <div>
                        <Controller
                          name="ano"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Informe o ano",
                            min: { value: 1900, message: "Ano inválido" },
                            max: { value: new Date().getFullYear(), message: "Ano inválido" },
                            minLength: { value: 4, message: "Ano inválido" },
                            maxLength: { value: 4, message: "Máximo 4 dígitos" }
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Ano"
                              maxLength="4"
                              inputMode="numeric"
                              onChange={e => field.onChange(e.target.value.replace(/\D/g, ""))}
                            />
                          )}
                        />
                        {errors.ano && <span style={{ color: "red", fontSize: 12 }}>{errors.ano.message}</span>}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary">
                    Próximo
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleSair}
                  >
                    Sair
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit(enviarFormulario)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      {...register("email", {
                        required: "O email é obrigatório.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Digite um email válido.",
                        },
                      })}
                      type="email"
                      placeholder="Digite aqui seu endereço de email"
                      id="email"
                      name="email"
                      value={dadosFormulario.email}
                      onChange={aoDigitar}
                      autoComplete="off"
                    />
                    {errors.email && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                      {...register("senha", {
                        required: "A senha é obrigatória.",
                        minLength: {
                          value: 6,
                          message: "A senha deve ter pelo menos 6 caracteres.",
                        },
                      })}
                      type="password"
                      placeholder="Digite aqui sua senha"
                      id="senha"
                      name="senha"
                      value={dadosFormulario.senha}
                      onChange={aoDigitar}
                      autoComplete="off"
                    />
                    {errors.senha && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {errors.senha.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input
                      {...register("confirmarSenha", {
                        required: "Confirme sua senha.",
                        validate: (value) =>
                          value === dadosFormulario.senha || "As senhas não coincidem.",
                      })}
                      type="password"
                      placeholder="Digite novamente sua senha"
                      id="confirmarSenha"
                      name="confirmarSenha"
                      value={dadosFormulario.confirmarSenha}
                      onChange={aoDigitar}
                      autoComplete="off"
                    />
                    {errors.confirmarSenha && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {errors.confirmarSenha.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn-primary">
                    Concluir
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setEtapa(1)}
                  >
                    Voltar
                  </button>

                  <div className="texto-privacidade">
                    <p>
                      Leia nossas{" "}
                      <a
                        href="/politica-privacidade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Políticas de Privacidade
                      </a>{" "}
                      e <br />
                      <a
                        href="/termos-uso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Termos de Uso
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardCadastro;
