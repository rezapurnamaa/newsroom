import { styled } from "styled-components";

export const ArticlePageContainer = styled.div`
  display: flex;
  justify-content: center;

  .article-container {
    width: 1140px;
    height: 100vh;

    /* img {
      max-width: 1140px;
    } */

    .title {
      font-size: 25px;
      padding: 5px 10px 0px 0px;
      text-align: center;
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    .published {
      color: #9b9ea3;
      font-weight: bold;
      font-style: italic;
      text-align: left;
    }

    .content {
      padding-top: 50px;
      display: flex;

      .articles-section {
        display: flex;

        max-width: 78%;
        flex-wrap: wrap;
        border-right: 1px solid black;
      }
    }
  }

  /* Add responsive design rules */
  @media (max-width: 768px) {
    width: 100%;

    .article-container {
      flex-flow: column wrap;
      padding-right: 0px;
      padding-left: 0px;

      .title {
        font-size: 15px;
        padding: 0px;

        h1 {
          margin-top: 0px;
          margin-bottom: 0px;
        }
      }

      p {
        padding-left: 10px;
        padding-right: 10px;
      }

      .content {
        padding-top: 10px;
      }
    }
  }
`;
