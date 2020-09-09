import React from "react";
import "./styled.css";
import {listUsers} from "../../Services/QueryGQL"

function HomePage() {

  const setUsersList = () => { 
    console.log(listUsers())
  }

  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) a sua HomePage da Taqtile!</h1>
      <ul>
        <li>Nome</li>
        <li>Email</li>
      </ul>
      {
        setUsersList()
      }
      <ul>
        <li>Nome</li>
        <li>Email</li>
      </ul>
      <ul>
        <li>Nome</li>
        <li>Email</li>
      </ul>
    </div>
  );
}

export default HomePage;
