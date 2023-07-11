import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { FONTS } from "./theme";
import { WebsiteLogo } from "./components/WebsiteLogo";

function App() {
  return (
    <ThemeProvider theme={{ fonts: FONTS }}>
      <WebsiteLogo />
      <NavBar />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
