import React from "react";
import "./styled.css";

function AddUserPage() {
  
  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) a página de cadastro!</h1>
      <form className="Form-signup">
        <label htmlFor="name">Nome</label>
        <input
          required
          className="Input"
          type="text"
          placeholder="Seu Nome Completo"
          id="name"
        />
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
        <label htmlFor="phone">Telefone</label>
        <input
          required
          className="Input"
          type="text"
          name="phone"
          placeholder="Somente dígitos"
          title="Somente dígitos"
          pattern="(?=.*[0-9]).{7,}"
          id="phone"
        />         
        <label htmlFor="birthDate">Data de Nascimento</label>
        <input
          required
          className="Input"
          type="date"
          name="birthDate"
          placeholder="Somente dígitos"
          title="Somente dígitos"
          pattern="(?=.*[0-9]).{7,}"
          id="birthDate"
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
        <label htmlFor="role">Papel</label>
        <select
          required
          className="Input"
          name="role"
          placeholder="Digite aqui o papel do usuário"
          id="role"
        >
          <option>admin</option>
          <option>user</option>
        </select>         
      </form>
    </div>
  );
}

export default AddUserPage;
