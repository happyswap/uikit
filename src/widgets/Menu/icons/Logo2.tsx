import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";
import { LogoProps } from "./Logo";





const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const width = props.width?props.width:'24';
  const height = props.height?props.height:'24';
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 50"><g paintOrder="stroke fill markers"><ellipse cx="24.981" cy="25.155" fill="#fff" rx="24.624" ry="24.746"/><ellipse cx="24.981" cy="25.155" fill="#9850fe" rx="22.23" ry="22.339"/><path fill="#fff" d="M12.035 16.965l3.731 3.731-4.611 4.611-3.732-3.73zM25 11.882l4.637 4.636-17.316 17.316-4.636-4.637zm0 0l8.765 8.764-4.6 4.6-8.764-8.765zm12.645 5.306l4.636 4.636L24.977 39.13l-4.637-4.637zm-16.81 8.578l8.752 8.752-4.611 4.612-8.752-8.752zm17.987-.062l3.732 3.731-4.6 4.6-3.73-3.732z"/></g></svg>
  );
};

export default Logo;
