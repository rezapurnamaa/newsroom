import { styled } from "styled-components";

export const LogoutStyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-color: black;

  .title {
    font-size: 25px;

    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  .content {
    width: 1140px;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
  }

  .login-button {
    margin: 40px 40px 40px 40px;
    padding: 5px 65px;
    color: white;
    background-color: seagreen;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }
`;
