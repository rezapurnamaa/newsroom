import React from "react";
import { StyledContainer } from "./navBar.styles";
import { useAuth } from "../../auth/AuthContext";

const NavBar = (props: { username: string }) => {
  const auth = useAuth();

  const handleLogout = () => {
    window.location.href = "/logout";
    auth.logOut();
  };

  return (
    <StyledContainer>
      <div className="nav-items">
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="/">Apple</a>
        </span>
        <span>
          <a href="/">Tesla</a>
        </span>
        <span>
          <a href="/">Tech</a>
        </span>
        <span>
          <a href="/">Politics</a>
        </span>
        <div>
          <span className="navbar-user">Hi, {props.username || "Guest"}</span>
          <span>
            <button onClick={handleLogout}>Logout</button>
          </span>
        </div>
      </div>
    </StyledContainer>
  );
};

export default NavBar;
