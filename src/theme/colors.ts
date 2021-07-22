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
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
export const lightColors: Colors = {
// export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#d8d1f6",
  secondary: "rgba(255,255,255,0.87)", //
  background: "#5c35fc", //
  backgroundDisabled: "#5c35fc", //
  contrast: "#EEEEEE",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#7b22e2",
  primaryDark: "#6527a8",
  tertiary: "#846bf1", //
  text: "#fcfae2", //
  textDisabled: "#b3a5c7", //
  textSubtle: "#DDDDDD", //
  borderColor: "#61634b",
  card: "#5c35fc", //
  nav: "#5c35fc", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #A34FFE 0%, #5934FC 100%)", //
  },
};
