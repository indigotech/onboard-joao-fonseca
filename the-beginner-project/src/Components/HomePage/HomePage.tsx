import React, { useEffect, useState } from 'react';
import "./styled.css";
import {listUsers} from "../../Services/QueryGQL";

function HomePage() {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const getUsers = await listUsers()
      console.log(getUsers)
      setUsersList(getUsers)
    }
    fetchUsers();
  }, []);

  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) a sua HomePage da Taqtile!</h1>
        {usersList.map((user: any) => {
          return (
            <ul>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
          );
        })}
      </div>
  );
}

export default HomePage;
