import React from "react";
import { LogoutStyledContainer } from "./logoutpage.styles";

const LogoutPage = () => {
  //import axios from "axios";
  function handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <LogoutStyledContainer>
      <div className="content">
        <h1 className="title">You are now logged out.</h1>
        <button className="login-button" onClick={handleLogOut}>
          Click here to log back in
        </button>
      </div>
    </LogoutStyledContainer>
  );
};

export default LogoutPage;
