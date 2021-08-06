import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

import "./logo.css"

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

export interface LogoProps extends SvgProps {
  isDark: boolean;
  width?:number;
  height?:number;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const logoImg = isDark ? "/images/logo-dark.png" : "/images/logo.png";
  // const textColor = isDark ? "#FFFFFF" : "#432918";
  // eslint-disable-next-line react/destructuring-assignment
  const width = props.width?props.width:'46';

  // eslint-disable-next-line react/destructuring-assignment
  const height = props.height?props.height:'46';
  return (

  <svg id="ec0k8KSO3Pa1" width={width} height={height}  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
    <defs><radialGradient id="ec0k8KSO3Pa4-fill" cx="0" cy="0" r="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="matrix(1 0 0 1 0.5 0.5)"><stop id="ec0k8KSO3Pa4-fill-0" offset="0%" stopColor="rgb(254,207,55)"/><stop id="ec0k8KSO3Pa4-fill-1" offset="100%" stopColor="rgb(254,154,52)"/></radialGradient><filter id="ec0k8KSO3Pa8-filter" x="-400%" width="600%" y="-400%" height="600%"><feGaussianBlur id="ec0k8KSO3Pa8-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="1.5,1.5"/><feOffset id="ec0k8KSO3Pa8-filter-drop-shadow-0-offset" dx="2" dy="2" result="tmp"/><feFlood id="ec0k8KSO3Pa8-filter-drop-shadow-0-flood" floodColor="rgba(0,0,0,0.5)"/><feComposite id="ec0k8KSO3Pa8-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ec0k8KSO3Pa8-filter-drop-shadow-0-merge"><feMergeNode id="ec0k8KSO3Pa8-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ec0k8KSO3Pa8-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><g id="ec0k8KSO3Pa2"><ellipse id="ec0k8KSO3Pa3" rx="24.6244" ry="24.746" transform="matrix(1 0 0 1 24.9811 25.1546)" paintOrder="stroke fill markers" fill="rgb(255,255,255)" stroke="none" strokeWidth="0.227756" strokeLinecap="round" strokeLinejoin="round"/><ellipse id="ec0k8KSO3Pa4" rx="22.2297" ry="22.3395" transform="matrix(1 0 0 1 24.9811 25.1546)" paintOrder="stroke fill markers" fill="url(#ec0k8KSO3Pa4-fill)" stroke="none" strokeWidth="0.205607" strokeLinecap="round" strokeLinejoin="round"/><g id="ec0k8KSO3Pa5_ts" transform="translate(24.981054,25.154581) scale(0.2,0.2)"><ellipse id="ec0k8KSO3Pa5" rx="22.2297" ry="22.3395" transform="translate(0.000046,0.000019)" paintOrder="stroke fill markers" fill="rgb(254,207,55)" stroke="none" strokeWidth="0.205607" strokeLinecap="round" strokeLinejoin="round"/></g><g id="ec0k8KSO3Pa6_ts" transform="translate(24.981054,25.154581) scale(0.2,0.2)"><ellipse id="ec0k8KSO3Pa6" rx="22.2297" ry="22.3395" transform="translate(0.000046,0.000019)" paintOrder="stroke fill markers" fill="rgb(254,207,55)" stroke="none" strokeWidth="0.205607" strokeLinecap="round" strokeLinejoin="round"/></g><g id="ec0k8KSO3Pa7_ts" transform="translate(24.981054,25.154581) scale(0.2,0.2)"><ellipse id="ec0k8KSO3Pa7" rx="22.2297" ry="22.3395" transform="translate(0.000046,0.000019)" paintOrder="stroke fill markers" fill="rgb(254,207,55)" stroke="none" strokeWidth="0.205607" strokeLinecap="round" strokeLinejoin="round"/></g><g id="ec0k8KSO3Pa8_ts" transform="translate(24.988975,25.505826) scale(0.8,0.8)"><path id="ec0k8KSO3Pa8" d="M12.034678,16.964669L15.766009,20.696002L11.154531,25.307483L7.423198,21.576149ZM25.001377,11.88212L29.637649,16.518394L12.322326,33.833721L7.686052,29.197443ZM25.001377,11.88212L33.76567,20.646412L29.166581,25.245499L20.402288,16.481206ZM37.645761,17.187803L42.282034,21.824078L24.976582,39.129527L20.340309,34.493254ZM20.836162,25.766151L29.588061,34.518054L24.976582,39.129532L16.224678,30.377633ZM38.823422,25.704161L42.554752,29.435492L37.955663,34.034581L34.224333,30.303246Z" transform="translate(-24.988975,-25.505826)" paintOrder="stroke fill markers" filter="url(#ec0k8KSO3Pa8-filter)" fill="rgb(255,255,255)" stroke="none" strokeWidth="0.277819" strokeLinecap="round" strokeLinejoin="round"/></g></g></svg>
  );
};

export default Logo;
