import { Link } from "react-router-dom";
import { StyledContainer } from "./articleCard.styles";
import {
  BsHandThumbsUp as Like,
  BsChatSquare as Comment,
  BsArrowRight as ArrowRight,
} from "react-icons/bs";
import ImageCard from "../imageCard/imageCard";

type articleCardType = {
  title: string;
  description: string;
  image: string;
  id?: number;
};

const ArticleCard = ({ title, description, image, id }: articleCardType) => {
  return (
    <StyledContainer>
      <div className="article-card ">
        <ImageCard backgroundImageUrl={image} />
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
            <span>
              <Link to={`/articles/${id}`}>more...</Link>
            </span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default ArticleCard;
