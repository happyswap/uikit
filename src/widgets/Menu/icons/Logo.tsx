import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;
const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const logoImg = isDark ? "/images/logo-dark.png" : "/images/logo.png";
  // const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><defs><radialGradient id="b" cx="141.476" cy="110.241" r="57.24" fx="141.476" fy="110.241" gradientTransform="matrix(.38836 0 0 .39027 -29.962 -17.87)" gradientUnits="userSpaceOnUse" xlinkHref="#a"/><linearGradient id="a"><stop offset="0" stopColor="#ffbe00"/><stop offset="1" stopColor="#ff7600"/></linearGradient></defs><g paintOrder="stroke fill markers"><ellipse cx="24.981" cy="25.155" fill="#fff" rx="24.624" ry="24.746"/><ellipse cx="24.981" cy="25.155" fill="url(#b)" rx="22.23" ry="22.339"/><path fill="#8444fd" d="M11.539 16.638l3.874 3.874-4.788 4.788-3.875-3.874zm13.463-5.278l4.814 4.814-17.979 17.979-4.814-4.814zm0 0l9.1 9.1-4.775 4.776-9.1-9.1zm13.129 5.51l4.813 4.813-17.968 17.968-4.814-4.814zm-17.454 8.906l9.087 9.087-4.788 4.788-9.087-9.087zm18.676-.064l3.875 3.874-4.776 4.775-3.874-3.874z"/></g></svg>
  );
};

export default Logo;
