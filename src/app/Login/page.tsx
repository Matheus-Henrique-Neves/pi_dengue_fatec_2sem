import React from 'react';
import './Login.css';

const LoginPage: React.FC = () => {
    return (
<div className="container">
  <form className="login-form">
    <h2>Login</h2>
    <div className="input-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Digite seu email" required />
    </div>
    <div className="input-group">
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
    </div>
    <button type="submit">Entrar</button>
    <p className="signup-text">Não tem uma conta? <a href="#">Cadastre-se</a></p>
  </form>
</div>
    );
};

export default LoginPage;