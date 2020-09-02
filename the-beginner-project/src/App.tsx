import React from 'react';

import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="Device-container">
        <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
        <form className="Form-login">
          <label>E-mail</label>
          <input
          className="Input"
            type="email"
          />
          <label>Senha</label>
          <input
          className="Input"
          type="password"
          />
          <button
          type="submit"
          className="Button"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
