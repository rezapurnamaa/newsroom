import { StyledContainer } from "./article.styles";
import { Article } from "../../interfaces/Article";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getArticle } from "../../api/articleApi";

const ArticlePage = () => {
  // Get the articleId from the URL parameter
  const { id } = useParams();

  let articleId: number = 0;
  if (id !== undefined) {
    articleId = parseInt(id, 10);
  }

  // Fetch the article when the component mounts
  const fetchArticle = useCallback(async () => {
    try {
      const data = await getArticle(articleId);
      if (Array.isArray(data) && data.length > 0) {
        const fetchedArticle: Article = data[0];
        setArticle(fetchedArticle); // Set article to the first element in the array
      }
    } catch (error) {
      const err = error as Error;
      console.error("error: ", err.message);
    }
  }, [articleId]);

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  if (article && articleId !== undefined) {
    const { title, publishedAt, content, urlToImage } = article;
    return (
      <StyledContainer>
        <div className="article-container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <p className="published">published at: {publishedAt}</p>
          <img src={urlToImage} alt="" />
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </div>
        </div>
      </StyledContainer>
    );
  }

  return <div>Loading...</div>;
};

export default ArticlePage;
