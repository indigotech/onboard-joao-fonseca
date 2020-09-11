import React, { useEffect, useState } from "react";
import "./styled.css";
import { listUsersQuery } from "../../Services/QueryGQL";
import { useHistory } from "react-router";

function UserDetailsPage() {
  const [usersList, setUsersList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [limit] = useState (10)

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await listUsersQuery(offSet, limit);
      setUsersList(getUsers);
      setUsersPerPage(getUsers.length)

    }
    fetchUsers();
  }, [offSet, limit]);

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
      </div>
    </div>
  );
}

export default UserDetailsPage;
