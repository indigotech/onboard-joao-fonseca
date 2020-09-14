import React, { useEffect, useState } from "react";
import "./styled.css";
import { getUserQuery } from "../../Services/QueryGQL";
import { useHistory } from "react-router";


function UserDetailsPage() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState({})


  useEffect(() => {
    async function fetchUserData() {
      const user = await getUserQuery(userId); 
      setUserData(user)
    }
    fetchUserData();
  }, [userId, userData]);
  console.log(userData)

  const history = useHistory();
  const handleClick = (event: React.MouseEvent) => {
    history.push("/signup")
  }

  return (
    <div className="Home-container">    
      <nav className="Nav-bar">
        <button onClick={handleClick} className="Nav-button">
          Novo Usuário
        </button>
      </nav>
      <div className="User-list-container">
        <h1 className="Title">Bem-vindo(a) a página de detalhes de um usuário</h1>      
        {
          <p>userData</p>
        }
      </div>
    </div>
  );
}

export default UserDetailsPage;
