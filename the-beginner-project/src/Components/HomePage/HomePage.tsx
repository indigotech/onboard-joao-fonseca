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
  
  const loadNextUsers = (event: React.MouseEvent) => {
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

  const handleClickSignUp = (event: React.MouseEvent) => {
    history.push("/signup")
  }

  const handleClickUserDetails = (userId: string) => (event: React.MouseEvent) => {
      history.push({
        pathname: `/user_details/${userId}`,
      })  
  }


  return (
    <div className="Home-container">    
      <nav className="Nav-bar">
        <button onClick={handleClickSignUp} className="Nav-button">
          Novo Usuário
        </button>
      </nav>
      <div className="User-list-container">
        <h1 className="Title">Bem-vindo(a) a sua HomePage da Taqtile!</h1>
        
          {usersList.map((user: any) => {
            return (
              <div onClick={handleClickUserDetails(user.id)} className="Single-user-data">
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.id}</li>
              </div>
            );
          })}
      
        <div className="Page-buttons">
          <button onClick={loadPreviousUsers}>Últimos {limit} usuários</button>
          <button onClick={loadNextUsers}>Próximos {limit} usuários</button>
        </div>        
      </div>
    </div>
  );
}

export default HomePage;
