import { styled } from "styled-components";

export const StyledContainer = styled.div`
  margin: 0px 15px 15px 15px;

  .article-card {
    display: flex;
    flex-flow: column wrap;
    max-width: 400px;
    height: 600px;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-between;
  }

  .drop-shadow {
    box-shadow: 0px 0px 10px 2px #f2f2f2;
  }

  .article-card:hover {
    transform: scale(1.02);
  }

  .title {
    font-size: 25px;
    padding: 5px 10px 0px 0px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  .divider {
    margin-top: 16px;
    margin-bottom: 3px;
    height: 1px;
    width: 45%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.background.lightBlack};
  }

  .description {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
    padding: 12px;
    font-weight: 300;
    color: black;
  }

  .data-section {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin-bottom: 30px;
  }

  span {
    padding-left: 2px;
    font-size: 13px;
  }

  .vertical-center {
    display: flex;
    align-items: center;
  }

  .like-icon {
    border-color: #9b9ea3;
  }

  .read-more-icon {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0px 5px 0px 5px;
    margin-bottom: 30px;
    border-radius: 15px;

    .article-card {
      /* display: flex; */
      border-radius: 15px;
      flex-flow: column wrap;
      background-color: #f2f2f2;
      height: auto;
      justify-content: flex-start;
    }

    .title {
      font-size: 22px;
      margin: 15px 10px 15px 10px;
      padding: 10px;
    }

    .divider {
      margin-top: 15px;
      margin-bottom: 15px;
      height: 1px;
      width: 65%;
      border-radius: 10px;
    }

    .description {
      margin: 15px 0px 15px 0px;
    }

    .data-section {
      display: flex;
      justify-content: space-around;
      width: 70%;
      margin-bottom: 10px;
    }

    .article-card:hover {
      transform: initial;
    }
  }
`;
