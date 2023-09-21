import React from "react";
import { StyledContainer } from "./spotlight.styles";
import { IoDiamondSharp as Icon } from "react-icons/io5";
function Spotlight() {
  return (
    <StyledContainer>
      <div className="spotlight-section">
        <div className="title">NEWS</div>
        <p className="description">What an important news.</p>
        <div className="dividers-container">
          <div className="divider"></div>
          <div className="icon-container">
            <Icon size={15} />
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Spotlight;
