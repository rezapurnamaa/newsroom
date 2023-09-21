const FONTS = {
  primary: "Stick No Bills, sans serif",
  secondary: "Playfair Display, serif",
};

const COLORS = {
  background: { primary: "fafafa", lightBlack: "#282828" },
};

export const theme = {
  fonts: FONTS,
  colors: COLORS,
};

export type ThemeType = typeof theme;

export { FONTS, COLORS };
