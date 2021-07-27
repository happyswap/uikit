import React from "react";
import { SvgProps } from "../../../components/Svg/types";
export interface LogoProps extends SvgProps {
    isDark: boolean;
    width?: number;
    height?: number;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
