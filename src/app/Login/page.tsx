"use client"
import React from 'react';
import styles from "./Login.module.css";
import Link from 'next/link';

const Login  = () => {
  return (
    <div className={styles.divApp}>
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.title}>Login</h2>
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
        <Link href="/Dados"><p  className={styles.button}>
          Entrar
        </p>
        </Link>
       
      </div>
    </div>
    </div>
    );
};

export default Login;