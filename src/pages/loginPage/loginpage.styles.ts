import { styled } from "styled-components";

export const LoginStyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-items: center;
  justify-content: center;
  border-color: black;

  .login-card {
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    max-width: 400px;
    height: 300px;
    margin-top: 100px;
  }

  .title {
    font-size: 25px;

    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  .content {
    width: 1140px;
    height: 100vh;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }
`;
