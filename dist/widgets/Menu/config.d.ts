import { INamedValues } from "./types";
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items: {
        label: string;
        href: string;
    }[];
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const tokenInfo: INamedValues[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 32;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
