import { ArticleCard } from "../../components/ArticleCard";
import { StyledContainer } from "./homepage.styles";
import { Spotlight } from "../../components/Spotlight";
import articles from "../../data/articles.json";
import quick from "../../data/quick.json";
import { QuickInfoCard } from "../../components/QuickInfoCard";

const Homepage = () => {
  const articleCards = articles.map(
    ({ title, description, urlToImage, id }) => (
      <ArticleCard
        title={title}
        description={description}
        image={urlToImage}
        key={id}
      />
    )
  );

  const quickCards = quick.map(({ title, description, id }) => {
    return <QuickInfoCard key={id} title={title} description={description} />;
  });

  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        <div className="news-container">
          <div className="articles-section">{articleCards}</div>
          <div className="quick-info-section">{quickCards}</div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Homepage;
