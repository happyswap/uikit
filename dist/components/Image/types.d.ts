import { SpaceProps } from "styled-system";
import { BoxProps } from "../Box";
export interface ContainerProps {
    width: number;
    height: number;
    responsive?: boolean;
}
export interface ImageProps extends ContainerProps, SpaceProps {
    src: string;
    alt?: string;
}
export declare const variants: {
    readonly DEFAULT: "default";
    readonly INVERTED: "inverted";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface TokenPairImageProps extends BoxProps {
    primarySrc: string;
    secondarySrc: string;
    variant?: Variant;
    height: number;
    width: number;
    primaryImageProps?: Omit<ImageProps, "width" | "height">;
    secondaryImageProps?: Omit<ImageProps, "width" | "height">;
}
