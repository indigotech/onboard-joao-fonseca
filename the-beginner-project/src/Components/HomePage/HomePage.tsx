import React from "react";
import "./styled.css";
//import { useHistory } from "react-router";

function HomePage() {
  // const history = useHistory();
  //  const componentDidMount:any () => {
  //     const token = localStorage.getItem("token")
  //     if (token === null) {
  //       history.push("/")
  //     }
  //   }
  //const isLoggedIn = HomePageProps.isLoggedIn;

  return (
    <div className="Login-container">
      <h1 className="Title">Bem-vindo(a) a sua HomePage da Taqtile!</h1>
    </div>
  );
}

export default HomePage;
