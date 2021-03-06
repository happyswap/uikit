import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#16256b",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};
export const darkColors: Colors = {
// export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundPanel: "rgba(255,255,255,0.45)",
  secondary: "#16256b", //
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#487CFF", //
  textDisabled: "#BDC2C4",
  textSubtle: "#16256b",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  nav: "#16256b", //
  menuBackground:"#5c35fc",
  menuLightBackground:"#d6d1ea",
  menuHover:"rgba(186,54,232,0.67)",
  menuNavBackground:"white",
  hamburger:"#eeeeee",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #9247e2 0%, #8442e2 100%)",
    orange: "linear-gradient(90deg, #ff4812, #fe9134)"
  },
};
export const lightColors: Colors = {
// export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#4c0384",
  secondary: "#fff", //
  background: "linear-gradient(139.73deg, #8544fd 0%, #9247e2 100%)", //
  backgroundPanel: "rgba(255,255,255,0.10)",
  backgroundDisabled: "#8442e2", //
  contrast: "#EEEEEE",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#7b22e2",
  primaryDark: "#6527a8",
  tertiary: "#ffa338", //
  text: "#fcfae2", //
  textDisabled: "#b3a5c7", //
  textSubtle: "#fff", //
  borderColor: "#7d41cb",
  card: "#5c35fc", //
  nav: "#5c35fc", //
  menuBackground:"rgba(71,3,153,0.25)",
  menuLightBackground:"rgba(212,193,231,0.43)",

  menuHover:"rgba(57,31,66,0.25)",
  menuNavBackground:"#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #A34FFE 0%, #5934FC 100%)", //
    orange: "linear-gradient(90deg, #ff4812, #fe9134)"
  },
  hamburger:"#cccccc",
};
