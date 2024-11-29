import React from 'react';
import styles from "./Cadastro.module.css";

const cadastro = () => {
  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <form className={styles.cadastroForm}>
          <h2 className={styles.title}>Cadastar</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="Nome" className={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              id="Nome"
              name="Nome"
              placeholder="Digite seu Nome"
              className={styles.input}
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
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
          <p className={styles.signupText}>
            tem uma conta? <a href="#" className={styles.link}>Login</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default cadastro;