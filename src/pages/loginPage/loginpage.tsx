import { LoginForm } from "../../components/LoginForm";
import { OnLoginProps } from "../../interfaces/onLoginProps";
import { LoginStyledContainer } from "./loginpage.styles";

const LoginPage = ({ onLogin }: OnLoginProps) => {
  return (
    <LoginStyledContainer>
      <div className="login-card">
        <LoginForm onLogin={onLogin} />
      </div>
    </LoginStyledContainer>
  );
};

export default LoginPage;
