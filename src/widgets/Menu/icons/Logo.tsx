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
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><defs><radialGradient id="b" cx="141.476" cy="110.241" r="57.24" fx="141.476" fy="110.241" gradientTransform="matrix(.38836 0 0 .39027 -29.962 -17.87)" gradientUnits="userSpaceOnUse" xlinkHref="#a"/><linearGradient id="a"><stop offset="0" stopColor="#ffbe00"/><stop offset="1" stopColor="#ff7600"/></linearGradient><filter id="c" colorInterpolationFilters="sRGB"><feFlood floodColor="#8444FD" floodOpacity=".973" result="flood"/><feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/><feGaussianBlur in="composite1" result="blur" stdDeviation="2"/><feOffset result="offset"/><feComposite in="SourceGraphic" in2="offset" result="composite2"/></filter></defs><g paintOrder="stroke fill markers"><ellipse cx="24.981" cy="25.155" fill="#fff" rx="24.624" ry="24.746"/><ellipse cx="24.981" cy="25.155" fill="url(#b)" rx="22.23" ry="22.339"/><path fill="#8444fd" d="M97.03 79.744l7.111 7.11-8.788 8.788-7.11-7.11zm24.71-9.686l8.836 8.835-32.997 32.998-8.835-8.836zm0 0l16.703 16.702-8.765 8.764-16.701-16.701zm24.097 10.111l8.835 8.835-32.978 32.979-8.836-8.835zm-32.034 16.348l16.679 16.678-8.788 8.788-16.679-16.678zm34.278-.119l7.11 7.111-8.764 8.764-7.11-7.11z" filter="url(#c)" transform="matrix(.54485 0 0 .54485 -41.329 -26.81)"/></g></svg>
  );
};

export default Logo;
