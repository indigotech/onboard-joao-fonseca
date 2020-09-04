import React from 'react';
import './styled.css';
import {mutation} from '../../Services/QueryGQL'

function LoginPage() {

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault()
  mutation()
}

  return (
    <div className="Login-container">
    <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
    <form
    onSubmit={handleSubmit}
    className="Form-login"
    >
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
  );
}

export default LoginPage;
