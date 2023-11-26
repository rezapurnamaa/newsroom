import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  .content {
    width: 1140px;
    height: 100vh;
  }

  .news-container {
    padding-top: 50px;
    display: flex;

    .articles-section {
      display: flex;

      max-width: 78%;
      flex-wrap: wrap;
      border-right: 1px solid black;
    }

    .quick-info-section {
      max-width: 22%;
      margin-left: 15px;
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }

    .news-container {
      flex-flow: column wrap;

      .articles-section {
        display: block;
        border-right: 0px;
        max-width: 100%;
        order: 1;
        width: auto;
      }

      .quick-info-section {
        order: 2;
        max-width: 100%;
        margin-left: 0px;
      }
    }
  }
`;
