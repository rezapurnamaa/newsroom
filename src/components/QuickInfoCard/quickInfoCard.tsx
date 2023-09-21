import React from "react";
import { StyledContainer } from "./quickInfoCard.styles";
const QuickInfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </StyledContainer>
  );
};

export default QuickInfoCard;
