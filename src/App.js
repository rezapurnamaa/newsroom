import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { FONTS, COLORS } from "./theme";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Spotlight } from "./components/Spotlight";

function App() {
  return (
    <ThemeProvider theme={{ fonts: FONTS, colors: COLORS }}>
      <WebsiteLogo />
      <NavBar />
      <Spotlight />
    </ThemeProvider>
  );
}

export default App;
