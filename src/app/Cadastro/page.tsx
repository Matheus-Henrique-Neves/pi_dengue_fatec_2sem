"use client"
import React, { useState, useEffect } from "react";
import styles from "../Login/Login.module.css";


const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados de Cadastro:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados para sua API
  };

  return (
    <div className={styles.divApp}>
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Cadastro</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="nome" className={styles.label}>
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            className={styles.input}
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="senha" className={styles.label}>
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            className={styles.input}
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
        <p className={styles.signupText}>
          Já tem uma conta? <a href="/login" className={styles.link}>Faça login</a>
        </p>
      </form>
    </div>
    </div>
    
  );
};

export default Cadastro;
