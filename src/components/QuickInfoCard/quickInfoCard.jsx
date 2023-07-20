import React from "react";
import { StyledContainer } from "./quickInfoCard.styles.js";
function QuickInfoCard({ title, description }) {
  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </StyledContainer>
  );
}

export default QuickInfoCard;
