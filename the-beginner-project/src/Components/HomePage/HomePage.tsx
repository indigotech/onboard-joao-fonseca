import React, { useEffect, useState } from "react";
import "./styled.css";
import { listUsersQuery } from "../../Services/QueryGQL";
import { useHistory } from "react-router";

function HomePage() {
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

  const loadNexUsers = (event: React.MouseEvent) => {
    if (usersPerPage === limit) {
      setOffSet(offSet + limit);
    } else {
    alert("Última página de usuários");
    }
  };
  const loadPreviousUsers = (event: React.MouseEvent) => {
    if (offSet !== 0) {
      setOffSet(offSet - 10);
    }
  };
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
        <h1 className="Title">Bem-vindo(a) a sua HomePage da Taqtile!</h1>
        <ul>
          {usersList.map((user: any) => {
            return (
              <div className="Single-user-data">
                <li>{user.name}</li>
                <li>{user.email}</li>
                <br></br>
              </div>
            );
          })}
        </ul>
        <div className="Page-buttons">
          <button onClick={loadPreviousUsers}>Últimos {limit} usuários</button>
          <button onClick={loadNexUsers}>Próximos {limit} usuários</button>
        </div>        
      </div>
    </div>
  );
}

export default HomePage;
