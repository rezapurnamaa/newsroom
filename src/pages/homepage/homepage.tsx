import { ArticleCard } from "../../components/ArticleCard";
import { StyledContainer } from "./homepage.styles";
import { Spotlight } from "../../components/Spotlight";
import { QuickInfoCard } from "../../components/QuickInfoCard";
import { Article } from "../../interfaces/Article";

const Homepage = (props: { articles: Article[]; quicks: Article[] }) => {
  const articleCards = props.articles.map(
    ({ title, description, urlToImage, id }) => (
      <ArticleCard
        title={title}
        description={description}
        image={urlToImage}
        key={id}
        id={id}
      />
    )
  );

  const quickCards = props.quicks.map(({ title, description, id }) => {
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
