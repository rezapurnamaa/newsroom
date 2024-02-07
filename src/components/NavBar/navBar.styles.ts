import { styled } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;

  .nav-items {
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  span {
    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: 0px 10px 0px 10px;
      font-weight: 600;
      letter-spacing: 1px;

      &:hover {
        background-color: red;
        color: #000;
      }
    }
  }

  .navbar-user {
    color: yellow;
    text-decoration: none;
    font-size: 20px;
    padding: 0px 10px 10px 10px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  button {
    /* margin: 40px 40px 40px 40px; */
    /* padding: 5px 65px; */
    color: white;
    background-color: grey;
    font-size: 16px;
    /* font-weight: 600; */
    border-radius: 3px;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;

    .nav-items {
    }
  }
`;
