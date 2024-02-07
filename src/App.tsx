import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Homepage } from "./pages/homepage";
import { Article } from "./interfaces/Article";
import { getAllArticles } from "./api/articleApi";
import { ArticlePage } from "./pages/article";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { PageWithNavBar } from "./pages/pageWithNavbar/pageWithNavBar";
import { PageWithoutNavBar } from "./pages/withoutNavbar/pageWithoutNavBar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { UserProps } from "./interfaces/User";
import PrivateRoute from "./auth/PrivateRoute";
import { NotFoundPage } from "./pages/notFoundPage";
import { useAuth } from "./auth/AuthContext";
import { LogoutPage } from "./pages/logoutPage";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [quicks, setQuicks] = useState<Article[]>([]);
  const [username, setUsername] = useState<UserProps | null>(null);
  // const token = sessionStorage.getItem("token");
  const { isAuthenticated, token } = useAuth();

  // Fetch articles when the component mounts
  useEffect(() => {
    if (isAuthenticated) {
      getAllArticles("articles", token).then((data) => setArticles(data));
      getAllArticles("articles", token).then((data) => setQuicks(data));
    }
  }, [isAuthenticated, token]);

  // console.log("token FE: ", token);
  // console.log("isAuthenticated FE: ", isAuthenticated);
  // console.log("articles: ", articles);

  const handleLogin = (data: UserProps) => {
    setUsername((prevState) => ({
      ...prevState,
      ...data,
    }));
    console.log("user: ", username);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <WebsiteLogo />
        <Routes>
          <Route element={<PageWithoutNavBar />}>
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route path="/logout" element={<LogoutPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<PageWithNavBar username={username?.firstname!} />}>
              <Route
                path="/"
                element={<Homepage articles={articles} quicks={quicks} />}
              />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/404" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
