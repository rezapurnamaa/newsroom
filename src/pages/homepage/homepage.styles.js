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
  }
`;
