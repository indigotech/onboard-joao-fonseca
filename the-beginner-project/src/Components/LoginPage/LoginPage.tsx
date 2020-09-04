import React, {useState} from 'react';
import './styled.css';
import {mutation} from '../../Services/QueryGQL';
import { useHistory } from "react-router";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleForm = (event: React.FormEvent) => {
  event.preventDefault()
  mutation(email, password)
  history.push("/homepage")
  }

 const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value)
  }
 const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value)
  }

  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
      <form
        onSubmit={handleForm}
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
          value={email}
          onChange={handleInputEmail}         
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
          value={password}
          onChange={handleInputPassword}
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
