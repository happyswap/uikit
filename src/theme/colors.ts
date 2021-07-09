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

export const lightColors: Colors = {
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

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#EBC39B",
  secondary: "#EBC39B", //  
  background: "#221812", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#EBC39B", //
  borderColor: "#61634b",
  card: "#120D0A", //
  nav: "#120D0A", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
  },
};
