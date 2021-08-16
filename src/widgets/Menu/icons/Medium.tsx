import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 38 24" {...props}>
      <g fill="#fff"  ><circle cx="13.828" cy="12.1" r="7.575"/><ellipse cx="-25.14" cy="12.1" rx="3.737" ry="7.118" transform="scale(-1 1)"/><ellipse cx="30.453" cy="12.1" rx="1.576" ry="6.507"/></g>
    </Svg>
  );
};

export default Icon;
