export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  orange:string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundPanel: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  nav: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  menuBackground:string,
  menuLightBackground:string,
  menuNavBackground:string,
  hamburger:string,
  menuHover:string
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
