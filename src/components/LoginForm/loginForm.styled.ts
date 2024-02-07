import styled from "styled-components";

export const StyledLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};

  .login-form {
    justify-content: space-evenly;
    margin: auto;
  }

  .error-message {
    color: red;
    margin-bottom: 25px;
  }

  form {
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(10px);
    background-color: #f2f2f2;
    /*    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;*/
  }

  .drop-shadow {
    box-shadow: 0px 0px 10px 2px #f2f2f2;
  }

  .form-group {
    flex-flow: column wrap;
    align-items: center;
    margin-top: 30px;
  }

  .title {
    margin-top: 15px;
  }

  .link {
    padding-bottom: 20px;
  }

  input {
    margin: 0 40px;
    padding: 12px 25px;
    width: 80%;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.lightBlack};
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    width: 260px;
    height: 22px;
    outline: none;
    border: none;
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: grey;
      opacity: 0.9;
    }
  }

  .submit-button {
    margin: 40px 40px 10px 40px;
    padding: 15px 20px;
    color: white;
    background-color: crimson;
    width: 80%;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;
