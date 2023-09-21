import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { NavBar } from "./components/NavBar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Homepage } from "./pages/homepage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WebsiteLogo />
      <NavBar />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
