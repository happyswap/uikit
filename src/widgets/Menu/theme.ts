import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.menuBackground,
  headBackground: lightColors.menuNavBackground,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.menuBackground,
  headBackground: darkColors.menuNavBackground,
  hover: "#473d5d",
};
