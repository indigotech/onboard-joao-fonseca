import React, { useState } from "react";
import "./styled.css";
import { loginMutation } from "../../Services/QueryGQL";
import { useHistory } from "react-router";

function LoginPage() {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    })
  };

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await loginMutation(state);
      history.push("/homepage");
      
    } catch (Error) {
      setLoading(false)
      alert(Error);
      console.log(state)
    }
  };

  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
      <form onSubmit={handleForm} className="Form-login">
        <label htmlFor="email">E-mail</label>
        <input
          required
          className="Input"
          type="email"
          name="email"
          placeholder="email@email.co"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Not a valid email format"
          id="email"
          value={state.email}
          onChange={handleInput}
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
          value={state.password}
          onChange={handleInput}
        />         
        {loading ? 
        "Entrando...":
        <button  type="submit" className="Button">Entrar</button>}
      </form>
    </div>
  );
}

export default LoginPage;
