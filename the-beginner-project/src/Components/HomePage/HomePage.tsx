import React, { useEffect, useState } from "react";
import "./styled.css";
import { listUsers } from "../../Services/QueryGQL";

function HomePage() {
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await listUsers(offSet);
      console.log(getUsers);
      setUsersList(getUsers);
    }
    fetchUsers();
  }, [offSet]);

  const loadMoreUsers = (event: React.MouseEvent) => {
    if (offSet === 90) {
      alert("Acabou a lista");
    } else {
      setOffSet(offSet + 10);
      setCurrentPage(currentPage + 1);
    }
  };
  const loadLessUsers = (event: React.MouseEvent) => {
    if (offSet === 0) {
    } else {
      setCurrentPage(currentPage - 1);
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
        <button onClick={loadLessUsers}>Últimos 10 usuários</button>
        <button onClick={loadMoreUsers}>Próximos 10 usuários</button>
      </div>
    </div>
  );
}

export default HomePage;
