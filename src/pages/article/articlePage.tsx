import { ArticlePageContainer } from "./article.styles";
import { Article } from "../../interfaces/Article";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getArticle } from "../../api/articleApi";
import { Image } from "../../components/imageCard";
import { useAuth } from "../../auth/AuthContext";

const ArticlePage = () => {
  //Get token from context
  const { token } = useAuth();
  // Get the articleId from the URL parameter
  const { id } = useParams();

  let articleId: number = 0;
  if (id !== undefined) {
    articleId = parseInt(id, 10);
  }

  // Fetch the article when the component mounts
  const fetchArticle = useCallback(async () => {
    try {
      const data = await getArticle(articleId, token);
      if (Array.isArray(data) && data.length > 0) {
        const fetchedArticle: Article = data[0];
        setArticle(fetchedArticle); // Set article to the first element in the array
      }
    } catch (error) {
      const err = error as Error;
      console.error("error: ", err.message);
      return <div>Something went wrong.</div>;
    }
  }, [articleId, token]);

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  const formatDate = (originalDate: string) => {
    const date = new Date(originalDate);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (article && articleId !== undefined) {
    const { title, publishedAt, content, urlToImage } = article;
    const formattedDate = formatDate(publishedAt);

    return (
      <ArticlePageContainer>
        <div className="article-container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <p className="published">published at: {formattedDate}</p>
          <Image backgroundimageurl={urlToImage} imageType="hero" />
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </div>
        </div>
      </ArticlePageContainer>
    );
  }

  return <div>Loading...</div>;
};

export default ArticlePage;
