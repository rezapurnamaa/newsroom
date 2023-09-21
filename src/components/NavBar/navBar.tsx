import React from "react";
import { StyledContainer } from "./navBar.styles";

const NavBar = () => {
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
      </div>
    </StyledContainer>
  );
};

export default NavBar;
