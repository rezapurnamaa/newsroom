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
    font-size: small;
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
  }

  .read-more-icon {
    text-decoration: underline;
  }
`;
