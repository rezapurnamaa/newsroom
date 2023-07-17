import React from "react";
import ArticleCard from "../../components/ArticleCard/articleCard";
import { StyledContainer } from "./homepage.styles";
import { Spotlight } from "../../components/Spotlight";
import articles from "../../data/articles.json";

function Homepage(props) {
  console.log("Articles: ", articles);
  const articleCards = articles.map(
    ({ title, description, urlToImage, id }) => (
      <ArticleCard title={title} description={description} image={urlToImage} />
    )
  );

  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        <div className="news-container">
          <div className="articles-section">{articleCards}</div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Homepage;
