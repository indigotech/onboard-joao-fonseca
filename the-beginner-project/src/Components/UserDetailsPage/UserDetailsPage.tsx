import React, { useEffect, useState } from "react";
import "./styled.css";
import { getUserQuery } from "../../Services/QueryGQL";
import { useHistory, useParams } from "react-router";
import { UserType } from "../../Services/Interfaces";


function UserDetailsPage() {
  const [userData, setUserData] = useState<UserType>();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const user = await getUserQuery(id); 
        setUserData(user)
        setLoading(false)
      } catch (err) {
        alert(err)
        history.push('/homepage')
      };    
    };
    fetchUserData();
  });

  const history = useHistory();
  const handleClick = (event: React.MouseEvent) => {
    history.push("/signup");
  };
  if(!loading) {
    return (
      <div className="Home-container">    
        <nav className="Nav-bar">
          <button onClick={handleClick} className="Nav-button">
            Novo Usuário
          </button>
        </nav>
        <div className="User-details-container">
          <h1 className="Title">Bem-vindo(a) a página de detalhes de um usuário</h1>      
          <p>Nome: {userData.name}</p>
          <p>Telefone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
          <p>Aniversário: {userData.birthDate}</p>
          <p>Tipo de usuário: {userData.role}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  };
};

export default UserDetailsPage;
