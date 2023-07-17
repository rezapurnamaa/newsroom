import React from "react";
import { StyledContainer } from "./articleCard.styles";
import {
  ThumbsUp as Like,
  CommentChatMessageAlt as Comment,
  ArrowRight,
} from "react-basicons";

function ArticleCard({ title, description, image }) {
  return (
    <StyledContainer>
      <div className="article-card">
        <img src={image} alt="bus" />
        <div className="title">{title}</div>
        <div className="divider" />
        <div className="description">{description}</div>
        <div className="data-section">
          <div className="like-icon vertical-center">
            <Like size={16} />
            <span>165</span>
          </div>
          <div className="comment-icon vertical-center">
            <Comment size={16} />
            <span>165</span>
          </div>
          <div className="read-more-icon vertical-center">
            <span>more...</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
