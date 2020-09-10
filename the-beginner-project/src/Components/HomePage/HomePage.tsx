import React, { useEffect, useState } from "react";
import "./styled.css";
import { listUsers } from "../../Services/QueryGQL";

function HomePage() {
  const [usersList, setUsersList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await listUsers(offSet);
      setUsersList(getUsers);
      setUsersPerPage(getUsers.length)
    }
    fetchUsers();
  }, [offSet]);

  const loadNexUsers = (event: React.MouseEvent) => {
    if (usersPerPage === 10) {
      setOffSet(offSet + 10);
    } else {
    alert("Última página de usuários");
    }
  };
  const loadPreviousUsers = (event: React.MouseEvent) => {
    if (offSet !== 0) {
      setOffSet(offSet - 10);
    }
  };

  return (
    <div className="Login-container">
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
        <button onClick={loadPreviousUsers}>Últimos 10 usuários</button>
        <button onClick={loadNexUsers}>Próximos 10 usuários</button>
      </div>
    </div>
  );
}

export default HomePage;
