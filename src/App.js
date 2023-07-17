import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { FONTS, COLORS } from "./theme";
import { WebsiteLogo } from "./components/WebsiteLogo";
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <ThemeProvider theme={{ fonts: FONTS, colors: COLORS }}>
      <WebsiteLogo />
      <NavBar />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
