import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { NavBar } from "./components/NavBar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Homepage } from "./pages/homepage";
import { Article } from "./interfaces/Article";
import { getAllArticles } from "./api/articleApi";
import { ArticlePage } from "./pages/article";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [quicks, setQuicks] = useState<Article[]>([]);

  // Fetch articles when the component mounts
  useEffect(() => {
    getAllArticles("articles").then((data) => setArticles(data));
    getAllArticles("articles").then((data) => setQuicks(data));
  }, []);
  console.log(articles);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <WebsiteLogo />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Homepage articles={articles} quicks={quicks} />}
          />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
