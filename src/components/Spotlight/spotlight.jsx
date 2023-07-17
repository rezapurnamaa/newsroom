import React from "react";
import { StyledContainer } from "./spotlight.styles";
import { ModelDiamond as Icon } from "react-basicons";
function Spotlight(props) {
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
