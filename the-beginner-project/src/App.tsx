import React from 'react';

import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="Device-container">
        <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
        <form className="Form-login">
          <label htmlFor="email">E-mail</label>
          <input 
          required
          className="Input"
          type="email"
          placeholder="email@email.co"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Not a valid email format"
          id="email"
          />
          <label htmlFor="password">Senha</label>
          <input 
          required
          className="Input"
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z]).{7,}"
          title="7 characters minimum, and should have at least one digit and one letter"
          placeholder="7 characters minimum"
          id="password"
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
