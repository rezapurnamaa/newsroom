import { useEffect, useState } from "react";
import { StyledLoginFormContainer } from "./loginForm.styled";
import validator from "validator";
import { BACKEND_URL } from "../../api/backendUrl";
import { OnLoginProps } from "../../interfaces/onLoginProps";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthContext";

const LoginForm = ({ onLogin }: OnLoginProps) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { isAuthenticated, setAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateEmail = (email: string) => {
    return validator.isEmail(email);
  };

  const getUserByEmail = async (email: string) => {
    try {
      const response = await fetch(`${BACKEND_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();
      // console.log("get user by email:", email);
      // console.log("data: ", data);
      if (!response.ok) {
        setShowErrorMessage(true);
        throw new Error(data?.message);
      }
      setShowErrorMessage(false);
      return data;
    } catch (error) {
      console.error(error);

      // alert(JSON.stringify(error, null, 2));
    }
  };

  const onUpdateField = (e: any) => {
    setShowErrorMessage(false);

    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    // alert(JSON.stringify(form, null, 2));

    if (!validateEmail(form.email)) {
      setShowErrorMessage(true);
      return;
    }

    //turn the handleSubmitForm to async to handle Promise
    const data = await getUserByEmail(form.email);

    if (!data) {
      setShowErrorMessage(true);
      getErrorMessage();
      return;
    }

    const { firstname, token } = data;
    const user = {
      firstname,
      token,
    };
    setAuthenticated(true);
    // console.log("firstname in handleSubmitForm: ", firstname);
    // console.log("user is logged in: ", isLoggedIn);
    sessionStorage.setItem("token", token);
    setToken(user.token);

    onLogin(user);
  };

  const getErrorMessage = () => {
    if (showErrorMessage) {
      return <div className="error-message">Invalid Email or Password</div>;
    }
  };

  return (
    <StyledLoginFormContainer>
      <form className="login-form drop-shadow" onSubmit={handleSubmitForm}>
        <div className="title">Login</div>
        <div className="form-group">
          <input
            className="email-field"
            type="text"
            aria-label="Email field"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="password-field"
            type="password"
            aria-label="Password field"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={form.password}
            onChange={onUpdateField}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Login
        </button>
        {getErrorMessage()}
      </form>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
