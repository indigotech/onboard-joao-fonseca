import React, { useState, useReducer } from "react";
import { useHistory } from "react-router";
import "./styled.css";

  const initialState = {
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    role: "",
  }
  function reducer(state: any, { field, value}: any) {
    return {
      ...state,
      [field]: value
    }
  }
function AddUserPage() {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: event.target.name, value: event.target.value})
  }
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ field: event.target.name, value: event.target.value})
  }
  const handleSignupForm = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
  };

  const {name, email, phone, birthDate, password, role} = state

  return (
    <div className="Signup-container">
      <h1 className="Title">Bem-vindo(a) a página de cadastro!</h1>
      <form onSubmit={handleSignupForm} className="Form-signup">
        <label htmlFor="name">Nome</label>
        <input
          onChange={onChange}
          value={name}
          name="name"
          required
          className="Input-signup"
          type="text"
          placeholder="Seu Nome Completo"
          id="name"
        />
        <label htmlFor="email">E-mail</label>
        <input
          onChange={onChange}
          value={email}
          name="email"
          required
          className="Input-signup"
          type="email"
          placeholder="email@email.co"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Not a valid email format"
          id="email"
        />
        <label htmlFor="phone">Telefone</label>
        <input
          onChange={onChange}
          value={phone}
          required
          className="Input-signup"
          type="text"
          name="phone"
          placeholder="Somente dígitos"
          title="Somente dígitos"
          pattern="(?=.*[0-9]).{7,}"
          id="phone"
        />         
        <label htmlFor="birthDate">Data de Nascimento</label>
        <input
          onChange={onChange}
          value={birthDate}
          required
          className="Input-signup"
          type="date"
          name="birthDate"
          placeholder="Somente dígitos"
          title="Somente dígitos"
          pattern="([0-9]).{7,}"
          id="birthDate"
        />         
        <label htmlFor="password">Senha</label>
        <input
          onChange={onChange}
          value={password}
          required
          className="Input-signup"
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z]).{7,}"
          title="7 characters minimum, and should have at least one digit and one letter"
          placeholder="7 characters minimum"
          id="password"
        />         
        <label htmlFor="role">Papel</label>
        <select
          onChange={onChangeSelect}
          value={role}
          required
          className="Input-signup"
          name="role"
          id="role"
        > 
          <option value="" disabled selected>Papel do usuário no sistema</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>      
        {loading ?
        "Cadastrando...":
        <button  type="submit" className="Button">Cadastrar</button>
        }           
      </form>
    </div>
  );
}

export default AddUserPage;
