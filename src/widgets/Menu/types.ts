import { Login } from "../WalletModal/types";

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  headBackground: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  hashLink?: boolean;
  target?: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  target?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface INamedValues{
  label:string;
  value:string;
}

export interface ITreePointsData{
  planted: number;
  carbon: string;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
  tokenInfo:INamedValues[];
  treePointsData: ITreePointsData
  showTokenInfo: boolean;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}
