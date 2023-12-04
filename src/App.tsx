import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Homepage } from "./pages/homepage";
import { Article } from "./interfaces/Article";
import { getAllArticles } from "./api/articleApi";
import { ArticlePage } from "./pages/article";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { PageWithNavBar } from "./pages/pageWithNavbar/pageWithNavBar";
import { PageWithoutNavBar } from "./pages/withoutNavbar/pageWithoutNavBar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { UserProps } from "./interfaces/User";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [quicks, setQuicks] = useState<Article[]>([]);
  const [username, setUsername] = useState<UserProps | null>(null);

  // Fetch articles when the component mounts
  useEffect(() => {
    getAllArticles("articles").then((data) => setArticles(data));
    getAllArticles("articles").then((data) => setQuicks(data));
  }, []);
  console.log(articles);

  const handleLogin = (data: UserProps) => {
    // console.log("handleLogin in App.tsx: ", data);
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
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          </Route>
          <Route element={<PageWithNavBar />}>
            <Route
              path="/"
              element={<Homepage articles={articles} quicks={quicks} />}
            />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
